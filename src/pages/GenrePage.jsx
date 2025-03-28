import React from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";

// Object containing books by genre
const booksByGenre = {
  horror: [
    { id: 1, title: "Dracula", author: "Bram Stoker" },
    { id: 2, title: "It", author: "Stephen King" },
  ],
  comedy: [
    { id: 3, title: "Good Omens", author: "Terry Pratchett & Neil Gaiman" },
    { id: 4, title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams" },
  ],
  romance: [
    { id: 5, title: "Pride and Prejudice", author: "Jane Austen" },
    { id: 6, title: "The Notebook", author: "Nicholas Sparks" },
    { id: 7, title: "Jane Eyre", Author: "Charlotte Bronte" },
  ],
  "sci-fi": [
    { id: 7, title: "Dune", author: "Frank Herbert" },
    { id: 8, title: "Foundation", author: "Isaac Asimov" },
  ],
  "slice of life": [
    { id: 9, title: "Norwegian Wood", author: "Haruki Murakami" },
    { id: 10, title: "A Man Called Ove", author: "Fredrik Backman" },
  ],
  adventure: [
    { id: 11, title: "The Hobbit", author: "J.R.R. Tolkien" },
    { id: 12, title: "Treasure Island", author: "Robert Louis Stevenson" },
  ],
};

const GenrePage = () => {
  const { genreName } = useParams();
  
  // Convert the genre name into the format used in the booksByGenre object
  const formattedGenre = genreName.replace(/-/g, " ").toLowerCase(); // Handle multi-word genres and convert to lowercase
  
  const capitalizedGenre =
    formattedGenre.charAt(0).toUpperCase() + formattedGenre.slice(1); // Capitalize the first letter

  // Check if the genre exists in booksByGenre, otherwise return an empty array
  const books = booksByGenre[formattedGenre] || [];

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Books in {capitalizedGenre}</h2>
      {books.length > 0 ? (
        <Row>
          {books.map((book) => (
            <Col md={4} key={book.id} className="mb-3">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>by {book.author}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p className="text-center">No books available in this genre.</p>
      )}
    </Container>
  );
};

export default GenrePage;
