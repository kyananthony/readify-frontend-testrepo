import React from "react";
import { Modal, Button } from "react-bootstrap";

const BookModal = ({ show, handleClose, book }) => {
  if (!book) return null; // Ensure book data exists before rendering

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{book.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={book.image} alt={book.title} className="img-fluid mb-3" />
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Published:</strong> {book.published}</p>
        <p><strong>Rating:</strong> ⭐⭐⭐⭐⭐</p>
        <p>{book.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">Add to Cart</Button>
        <Button variant="success">Start Reading</Button>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookModal;
