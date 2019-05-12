import axios from "axios";

export default {
  // Gets books from the Google API
  getBooks: function(q) {
    return axios.get("http://localhost:3002/api/google", { params: { q: "title:" + q } });
  },
  // Gets all saved books
  getSavedBooks: function() {
    return axios.get("http://localhost:3002/api/books");
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("http://localhost:3002/api/books/" + id);
  },
  // Saves an book to the database
  saveBook: function(bookData) {
    return axios.post("http://localhost:3002/api/books", bookData);
  }
};