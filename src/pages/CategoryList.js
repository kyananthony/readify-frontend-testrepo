import React, { useState } from "react";
import { Container, Card, Row, Col, Modal, Button } from "react-bootstrap";

const booksByGenre = {
  horror: [
    {
      id: 1,
      title: "Dracula",
      author: "Bram Stoker",
      image: "/images/dracula.jpg",
      preview: "A classic Gothic novel that tells the story of Count Dracula's attempt to move from Transylvania to England and spread the undead curse. This novel explores themes of fear, superstition, and immortality. The battle between good and evil is at the heart of this thrilling tale.",
      published: "1897",
      rating: 4.5,
    },
    {
      id: 2,
      title: "It",
      author: "Stephen King",
      image: "/images/it.jpg",
      preview: "A horror novel about a group of children who are terrorized by an evil entity that exploits their fears. The novel shifts between two timelines, exploring childhood trauma and the power of friendship. Pennywise, the terrifying clown, lurks in the shadows of Derry.",
      published: "1986",
      rating: 4.7,
    },
    {
      id: 3,
      title: "Frankenstein",
      author: "Mary Shelley",
      image: "/images/frankenstein.jpg",
      preview: "A young scientist creates a sapient creature in an unorthodox experiment, leading to tragic consequences. The novel raises questions about scientific responsibility and the nature of humanity. Victor Frankenstein's creation seeks acceptance but finds only horror.",
      published: "1818",
      rating: 4.3,
    },
    {
      id: 4,
      title: "The Shining",
      author: "Stephen King",
      image: "/images/shining.jpg",
      preview: "A psychological horror novel about a man, Jack Torrance, who accepts a position as the caretaker of an isolated hotel. As winter sets in, Jack's descent into madness leads to terror for his wife and son.",
      published: "1977",
      rating: 4.8,
    },
  ],
  comedy: [
    {
      id: 1,
      title: "Good Omens",
      author: "Neil Gaiman & Terry Pratchett",
      image: "/images/omens.jpg",
      preview: "An angel and a demon join forces to prevent the apocalypse, with plenty of humor and wit. This book is filled with quirky characters and clever satire on good and evil. The Antichrist is misplaced, leading to unexpected consequences.",
      published: "1990",
      rating: 4.6,
    },
    {
      id: 2,
      title: "The Hitchhiker's Guide to the Galaxy",
      author: "Douglas Adams",
      image: "/images/galaxy.gif",
      preview: "A sci-fi comedy classic filled with absurd humor and intergalactic adventures. Arthur Dent is swept off Earth just before it's destroyed to make way for a hyperspace bypass.",
      published: "1979",
      rating: 4.7,
    },
    {
      id: 3,
      title: "Catch-22",
      author: "Joseph Heller",
      image: "/images/catch.jpg",
      preview: "A dark comedy set during World War II, this novel follows Captain Yossarian and his comrades as they try to survive the absurdity of war. The concept of 'Catch-22' becomes a central theme of the book.",
      published: "1961",
      rating: 4.4,
    },
    {
      id: 4,
      title: "The Princess Bride",
      author: "William Goldman",
      image: "/images/princess.jpg",
      preview: "A fantasy adventure comedy that mixes romance, sword fights, and a quest for revenge. The story of Westley and Buttercup is filled with humor and wit, making it a timeless classic.",
      published: "1973",
      rating: 4.6,
    },
  ],
  romance: [
    {
      id: 1,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      image: "/images/pride.jpg",
      preview: "A timeless romance between Elizabeth Bennet and Mr. Darcy, filled with wit, misunderstandings, and social commentary. This novel explores themes of love, class, and personal growth. Their journey from initial disdain to deep affection is beautifully crafted.",
      published: "1813",
      rating: 4.8,
    },
    {
      id: 2,
      title: "The Notebook",
      author: "Nicholas Sparks",
      image: "/images/notebook.jpg",
      preview: "A deeply emotional love story about devotion, passion, and the test of time. Noah and Allie’s story is one of a love that endures even the harshest of life’s obstacles.",
      published: "1996",
      rating: 4.6,
    },
    {
      id: 3,
      title: "Me Before You",
      author: "Jojo Moyes",
      image: "/images/me.png",
      preview: "A heart-wrenching tale about Louisa Clark and Will Traynor. Their unlikely bond teaches them both about life, love, and loss. It explores the complexities of relationships and the pain of letting go.",
      published: "2012",
      rating: 4.7,
    },
    {
      id: 4,
      title: "Outlander",
      author: "Diana Gabaldon",
      image: "/images/outlander.png",
      preview: "Claire Randall, a World War II nurse, is mysteriously transported back in time to 18th-century Scotland. There, she becomes entangled in a passionate love affair with a dashing Scotsman.",
      published: "1991",
      rating: 4.8,
    },
  ],
};

const BookCategory = ({ category, books }) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setMessage("");
  };

  const handleClose = () => {
    setSelectedBook(null);
  };

  const handleAddToCart = (book) => {
    setCart([...cart, book]);
    setMessage(`${book.title} added to cart!`);
  };

  const handleStartReading = (book) => {
    if (cart.some((cartItem) => cartItem.id === book.id)) {
      setMessage(`Starting to read: ${book.title}`);
    } else {
      setMessage("This book must be purchased first before reading.");
    }
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    return (
      <>
        {"★".repeat(fullStars)}
        {halfStar && "☆"}
      </>
    );
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">{category.charAt(0).toUpperCase() + category.slice(1)} eBooks</h2>
      <Row>
        {books.map((book) => (
          <Col key={book.id} md={3} sm={6} xs={12}>
            <Card
              className="mb-4"
              onClick={() => handleBookClick(book)}
              style={{ cursor: "pointer" }}
            >
              <Card.Img
                variant="top"
                src={book.image}
                alt={`Cover of ${book.title}`}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>by {book.author}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for Book Preview */}
      <Modal show={!!selectedBook} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedBook?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={selectedBook?.image}
            alt={`Cover of ${selectedBook?.title}`}
            style={{ width: "100%", height: "auto", maxHeight: "400px", objectFit: "contain", marginBottom: "15px" }}
          />
          <p><strong>Author:</strong> {selectedBook?.author}</p>
          <p><strong>Published:</strong> {selectedBook?.published}</p>
          <p><strong>Rating:</strong> {renderStars(selectedBook?.rating)}</p>
          <p>{selectedBook?.preview}</p>
          {message && <p style={{ color: "red", fontWeight: "bold" }}>{message}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => handleAddToCart(selectedBook)}>Add to Cart</Button>
          <Button variant="success" onClick={() => handleStartReading(selectedBook)}>Start Reading</Button>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

const FeaturedEbooks = () => {
  return (
    <div>
      {Object.keys(booksByGenre).map((genre) => (
        <BookCategory key={genre} category={genre} books={booksByGenre[genre]} />
      ))}
    </div>
  );
};

export default FeaturedEbooks;
