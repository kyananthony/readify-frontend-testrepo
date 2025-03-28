import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const featuredEbooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "/images/gatsby.jpg",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    image: "/images/1984.jpg",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "/images/mockingbird.jpg",
  },
  {
    id: 4,
    title: "Moby-Dick",
    author: "Herman Melville",
    image: "/images/mobydick.jpg",
  },
  {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    image: "/images/prideandprejudice.jpg",
  },
  {
    id: 6,
    title: "War and Peace",
    author: "Leo Tolstoy",
    image: "/images/warandpeace.jpg",
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
              <Card.Img variant="top" src={book.image} alt={`Cover of ${book.title}`} />
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