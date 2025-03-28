import React, { useState } from "react";
import { Container, Button, Modal, Form } from "react-bootstrap";
import "./MyBooks.css"; // Ensure this file exists

// Sample Books
const purchasedBooks = [
  {
    title: "Dracula",
    author: "Bram Stoker",
    image: process.env.PUBLIC_URL + "/images/dracula.jpg",
    content: `Chapter 1: A Mysterious Arrival
Once upon a midnight dreary, while I pondered, weak and weary...
---
Chapter 2: The Castle Secrets
Deep into that darkness peering, long I stood there wondering, fearing...
---
Chapter 3: A Strange Encounter
And the silken sad uncertain rustling of each purple curtain...
`
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    image: process.env.PUBLIC_URL + "/images/pride.jpg",
    content: `Chapter 1: A New Arrival
It is a truth universally acknowledged...
---
Chapter 2: The Ball
Mr. Bennet was among the earliest of those who waited on Mr. Bingley...
---
Chapter 3: First Impressions
She is tolerable, but not handsome enough to tempt me...
`
  },
];

const MyBooks = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [chosenBook, setChosenBook] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  // Ensure content is split into readable pages
  const getPages = (text) => (text ? text.split("---") : []);

  const startReading = () => {
    if (chosenBook) {
      setSelectedBook(chosenBook);
      setCurrentPage(0);
    }
  };

  const closeBook = () => {
    setSelectedBook(null);
    setCurrentPage(0);
  };

  const nextPage = () => {
    if (selectedBook && currentPage < getPages(selectedBook.content).length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (selectedBook && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Container className="my-books-container">
      <h1>My Books</h1>

      {/* Book Selection Dropdown */}
      <Form.Group className="mb-3">
        <Form.Label>Select a book to read:</Form.Label>
        <Form.Select
          onChange={(e) => {
            const book = purchasedBooks.find((b) => b.title === e.target.value);
            setChosenBook(book || null);
          }}
          value={chosenBook ? chosenBook.title : ""}
        >
          <option value="">-- Choose a book --</option>
          {purchasedBooks.map((book, index) => (
            <option key={index} value={book.title}>
              {book.title} - {book.author}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Button 
        variant="primary" 
        onClick={startReading} 
        disabled={!chosenBook}
      >
        Start Reading
      </Button>

      {/* Modal for Reading a Book */}
      <Modal show={Boolean(selectedBook)} onHide={closeBook} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedBook?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="book-content">
          {selectedBook && (
            <pre>
              {getPages(selectedBook.content).length > 0
                ? getPages(selectedBook.content)[currentPage]
                : "No content available"}
            </pre>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={prevPage} disabled={currentPage === 0}>
            Previous
          </Button>
          <span>
            Page {currentPage + 1} / {selectedBook ? getPages(selectedBook.content).length : 1}
          </span>
          <Button
            variant="secondary"
            onClick={nextPage}
            disabled={selectedBook ? currentPage >= getPages(selectedBook.content).length - 1 : true}
          >
            Next
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default MyBooks;
