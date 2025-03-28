import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const featuredEbooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Moby-Dick",
    author: "Herman Melville",
    image: "https://via.placeholder.com/150",
  }
];

const FeaturedEbooks = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Featured eBooks</h2>
      <Row>
        {featuredEbooks.map((book) => (
          <Col key={book.id} md={3} sm={6} xs={12}>
            <Card className="mb-4">
              <Card.Img variant="top" src={book.image} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>by {book.author}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedEbooks;
