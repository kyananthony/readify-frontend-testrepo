import React, { useState } from "react";
import { Card, Container, Row, Col, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const booksByGenre = {
  horror: [
    { title: "Dracula", author: "Bram Stoker" },
    { title: "It", author: "Stephen King" },
    { title: "Frankenstein", author: "Mary Shelley" },
  ],
  comedy: [
    { title: "Good Omens", author: "Neil Gaiman & Terry Pratchett" },
    { title: "Hitchhiker's Guide", author: "Douglas Adams" },
    { title: "Catch-22", author: "Joseph Heller" },
  ],
  romance: [
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "The Notebook", author: "Nicholas Sparks" },
    { title: "Jane Eyre", author: "Charlotte Brontë" },
  ],
  "sci-fi": [
    { title: "Dune", author: "Frank Herbert" },
    { title: "Foundation", author: "Isaac Asimov" },
    { title: "Neuromancer", author: "William Gibson" },
  ],
  "slice of life": [
    { title: "Norwegian Wood", author: "Haruki Murakami" },
    { title: "A Man Called Ove", author: "Fredrik Backman" },
    { title: "Tuesdays with Morrie", author: "Mitch Albom" },
  ],
  adventure: [
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
    { title: "Treasure Island", author: "Robert Louis Stevenson" },
    { title: "Moby-Dick", author: "Herman Melville" },
  ],
};

const Home = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleClose = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-primary text-white text-center py-5">
        <Container>
          <h1>Discover Your Next Favorite Read!</h1>
          <p className="lead">Explore a world of books at your fingertips.</p>
          <Button variant="light" size="lg">Start Reading</Button>
        </Container>
      </section>

      {/* Categories Section */}
      <section className="categories py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Explore by Category</h2>
          {Object.keys(booksByGenre).map((genre) => (
            <div key={genre} className="mb-5">
              <h3 className="text-center mb-3">{genre.charAt(0).toUpperCase() + genre.slice(1)}</h3>
              <Row>
                {booksByGenre[genre].map((book, index) => (
                  <Col key={index} md={3} sm={6} xs={12}>
                    <Card className="mb-4" onClick={() => handleBookClick(book)} style={{ cursor: "pointer" }}>
                      <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Text>by {book.author}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Container>
      </section>

      {/* Modal for Book Preview */}
      <Modal show={!!selectedBook} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedBook?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Author:</strong> {selectedBook?.author}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;