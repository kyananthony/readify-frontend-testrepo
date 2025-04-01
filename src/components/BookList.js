import React, { useState, useEffect } from "react";
import axios from "../api"; // Import the configured axios instance
import BookModal from "./BookModal"; // Import the modal component

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/books/") // Make sure this matches your Django API endpoint
      .then((response) => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setError("Failed to load books.");
        setLoading(false);
      });
  }, []);

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="container">
      <h2 className="my-4 text-center">Explore by Category</h2>
      <div className="text-center mb-4">
        <h3>Horror</h3>
      </div>

      {/* Loading & Error Handling */}
      {loading && <p className="text-center">Loading books...</p>}
      {error && <p className="text-center text-danger">{error}</p>}

      <div className="row">
        {books.map((book, index) => (
          <div key={index} className="col-sm-6 col-md-4 col-lg-4">
            <div className="card mb-4">
              {/* Clickable image and title */}
              <img
                src={book.image}
                alt={book.title}
                className="card-img-top"
                onClick={() => handleBookClick(book)}
                style={{ cursor: "pointer" }}
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  onClick={() => handleBookClick(book)}
                  style={{ cursor: "pointer" }}
                >
                  {book.title}
                </h5>
                <p className="card-text">by {book.author}</p>
                <button className="btn btn-primary">Add to Cart</button>
                <button className="btn btn-success ms-2">Start Reading</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Book Details Modal */}
      {selectedBook && <BookModal show={showModal} handleClose={handleCloseModal} book={selectedBook} />}
    </div>
  );
};

export default BookList;
