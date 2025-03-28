import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const featuredEbooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
  },
  {
    id: 4,
    title: "Moby-Dick",
    author: "Herman Melville",
  },
  
  {
    id: 4,
    title: "Moby-Dick",
    author: "Herman Melville",
  },
  {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
  },
  {
    id: 6,
    title: "War and Peace",
    author: "Leo Tolstoy",
  },
  {
    id: 7,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
  },
  {
    id: 8,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
  },
  {
    id: 9,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
  },
  {
    id: 10,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
  },
  {
    id: 11,
    title: "Brave New World",
    author: "Aldous Huxley",
  },
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
