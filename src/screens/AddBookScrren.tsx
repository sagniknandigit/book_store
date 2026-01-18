import { StyleSheet, Text, View, Alert } from 'react-native';
import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import { createBookByID, updateBookByID } from '../api/http';

const AddBookScrren = ({ onCloseIconPress, onCreateSuccess, selectedItem }) => {
  const [bookName, setBookName] = useState(selectedItem?.book_title ?? '');
  const [authorName, setAuthorName] = useState(selectedItem?.name_of_author ?? '');
  const [coverURL, setCoverURL] = useState(selectedItem?.cover ?? '');
  const [price, setPrice] = useState(selectedItem?.price_of_book?.toString() ?? '');

  // ✅ Create new book
  const createNewBook = () => {
    createBookByID({
      body: {
        book_title: bookName,
        name_of_author: authorName,
        price_of_book: price,
        cover: coverURL,
      },
      onSuccess: () => {
        onCloseIconPress();
        onCreateSuccess();
      },
      onError: () => {
        Alert.alert('An error occurred while creating the book');
      },
    });
  };

  // ✅ Edit existing book
  const editBook = () => {
    updateBookByID({
      ID: selectedItem?.id,
      body: {
        book_title: bookName,
        name_of_author: authorName,
        price_of_book: price,
        cover: coverURL,
      },
      onSuccess: () => {
        onCloseIconPress();
        onCreateSuccess();
      },
      onError: () => {
        Alert.alert('An error occurred while updating the book');
      },
    });
  };

  return (
    <View>
      <AntDesign
        name="closecircle"
        size={24}
        color="#E81D1D"
        onPress={onCloseIconPress}
        style={{ alignSelf: 'flex-end', margin: 10 }}
      />

      <View style={styles.body}>
        <Text style={styles.title}>📚 Book Details</Text>

        <AppTextInput
          value={bookName}
          onChangeText={setBookName}
          placeholder="Book Name"
        />
        <AppTextInput
          value={authorName}
          onChangeText={setAuthorName}
          placeholder="Author Name"
        />
        <AppTextInput
          value={coverURL}
          onChangeText={setCoverURL}
          placeholder="Cover Image URL"
        />
        <AppTextInput
          value={price}
          onChangeText={setPrice}
          placeholder="Book Price"
          keyboardType="numeric"
        />

        <AppButton
          title={selectedItem ? 'Update Book' : 'Add Book'}
          onPress={selectedItem ? editBook : createNewBook}
        />
      </View>
    </View>
  );
};

export default AddBookScrren;

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
