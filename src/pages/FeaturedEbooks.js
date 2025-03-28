import React, { useState } from "react";
import { Container, Card, Row, Col, Modal, Button } from "react-bootstrap";

const featuredEbooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "/images/gatsby.jpg",
    preview: "A glimpse into the roaring twenties and the life of Jay Gatsby. This classic novel explores themes of wealth, love, and the American Dream. Experience the extravagance and tragedy of the Jazz Age.",
    published: "April 10, 1925",
    rating: 4.5,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    image: "/images/1984.jpg",
    preview: "A dystopian vision of a totalitarian future where Big Brother watches your every move. Winston Smith struggles to find truth in a world filled with lies. Will he escape the grip of a repressive government?",
    published: "June 8, 1949",
    rating: 4.8,
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "/images/mockingbird.png",
    preview: "A gripping tale of racial injustice in the Deep South. Through the eyes of Scout Finch, we witness a world of prejudice and moral growth. Her father, Atticus, stands as a beacon of justice in a divided society.",
    published: "July 11, 1960",
    rating: 4.9,
  },
];

const FeaturedEbooks = () => {
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
      <h2 className="text-center mb-4">Featured eBooks</h2>
      <Row>
        {featuredEbooks.map((book) => (
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

export default FeaturedEbooks;
