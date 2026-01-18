import { StyleSheet, View, FlatList, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import { deleteBookByID, getListOfBooks } from '../api/http';
import AddButton from '../components/AddButton';
import AddBookScrren from './AddBookScrren';

const HomeScreen = () => {
  const [bookList, setBookList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // ✅ Common fetch function
  const fetchBooks = () => {
    getListOfBooks({
      onSuccess: (books) => setBookList(books),
      onError: (err) => console.log('❌ Error fetching books:', err),
    });
  };

  // ✅ Fetch on load
  useEffect(() => {
    fetchBooks();
  }, []);

  // ✅ Delete
  const onDeleteItem = (item) => {
    deleteBookByID({
      itemID: item.id,
      onSuccess: () => fetchBooks(),
      onError: (error) => console.log('❌ Delete error:', error),
    });
  };

  // ✅ Edit
  const onEditItem = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  // ✅ Add new book
  const onAddNewBook = () => {
    setSelectedItem(null);
    setModalVisible(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={bookList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BookCard
            author={item.name_of_author}
            price={item.price_of_book}
            imageURL={item.cover}
            onDeleteItem={() => onDeleteItem(item)}
            onEditItem={() => onEditItem(item)}
          />
        )}
      />

      <AddButton onPress={onAddNewBook} />

      <Modal visible={modalVisible} animationType="slide">
        <AddBookScrren
          onCloseIconPress={() => setModalVisible(false)}
          onCreateSuccess={() => {
            fetchBooks();
            setModalVisible(false);
          }}
          selectedItem={selectedItem}
        />
      </Modal>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
