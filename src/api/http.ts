import axios from 'axios';
import { Alert } from 'react-native';

const endpointURL = 'https://6907338eb1879c890ed915ed.mockapi.io/books';

// ✅ Fetch all books
export const getListOfBooks = async ({ onSuccess, onError }) => {
  try {
    const response = await axios.get(endpointURL);
    console.log('📘 Books:', JSON.stringify(response.data, null, 2));
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error);
    console.log('❌ Error fetching books:', error);
  }
};

// ✅ Get a specific book by ID
export const getBookByID = async ({ onSuccess, onError, ID }) => {
  try {
    const response = await axios.get(`${endpointURL}/${ID}`);
    console.log('📗 Book:', JSON.stringify(response.data, null, 2));
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error);
    console.log('❌ Error fetching book:', error);
  }
};

// ✅ Delete a book by ID
export const deleteBookByID = async ({ onSuccess, onError, itemID }) => {
  try {
    const response = await axios.delete(`${endpointURL}/${itemID}`);
    Alert.alert('Book deleted successfully');
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error);
    console.log('❌ Error deleting book:', error);
  }
};

// ✅ Create a new book
export const createBookByID = async ({ onSuccess, onError, body }) => {
  try {
    const response = await axios.post(endpointURL, body);
    Alert.alert('Book created successfully');
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error);
    console.log('❌ Error creating book:', error);
  }
};

// ✅ Update an existing book
export const updateBookByID = async ({ onSuccess, onError, body, ID }) => {
  try {
    const response = await axios.put(`${endpointURL}/${ID}`, body);
    Alert.alert('Book updated successfully');
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error);
    console.log('❌ Error updating book:', error);
  }
};
