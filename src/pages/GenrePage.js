import React from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";

// Object containing books by genre
const booksByGenre = {
  horror: [
    { id: 1, title: "Dracula", author: "Bram Stoker" },
    { id: 2, title: "It", author: "Stephen King" },
    { id: 3, title: "Nocticadia", author: "Keri Lake, Julie Belfield"},
    { id: 4, title: "Red Rabbit", author: "Alex Grecian" },
    { id: 5, title: "Blood Meridian: Or the Evening Redness in the West", author: "Cormac McCarthy" },
    { id: 6, title: "Murder in the Mountains", author: "Drew Stickland" },
    { id: 7, title: "Cold Lake", author: "Jeff Carson"},
    { id: 8, title: "Ghost Canyon", author: "Anthony M. Strong"},
    { id: 9, title: "Outer Dark (Vintage International)", author: "Cormac McCarthy"},
  ],
  comedy: [
    { id: 3, title: "Good Omens", author: "Terry Pratchett & Neil Gaiman" },
    { id: 4, title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams" },
    { id: 5, title: "The Office BFFs", author: "Jenna Fischer, Angela Kinsey"},
    { id: 6, title: "Whiskey Chaser", author: "Lucy Score, Claire Kingsley"},
    { id: 7, title: "So That Happened: A Romantic Comedy (Donovan Family Book 1)", author: "Katie Bailey"},
    { id: 8, title: "Wanted Wed Or Alive: The G.D Taylors Series", author: "Jenna Fischer, Angela Kinsley"},
    { id: 9, title: "Born STanding Up: A Comic's Life", author: "Steve Martin"},
    { id: 10, title: "Bossypants", author: "Tina Fey"},
    { id: 11, title: "Seriousy, Murder?", author: "Monica Hopes"},
  ],
  romance: [
    { id: 5, title: "Pride and Prejudice", author: "Jane Austen" },
    { id: 6, title: "The Notebook", author: "Nicholas Sparks" },
    { id: 7, title: "The Butcher (Fifth Republic Series Book 1", author: "Penelope Sky"},
    { id: 8, title: "Lights Out: An Into Darkness Novel", author: "Navessa Allen"},
    { id: 9, title: "Dreams of a Highlander: A Scottish Highland Romance (Arch Through Time Book 1", author: "Katy Baker"},
    { id: 10, title: "Painted Scars: An Enemies To Lovers Mafia Romance", author: "Neva Altaj"},
    { id: 11, title: "Rules of the Heart (A Chapel Pines Sweet Romance Book 1)", author: "Clover Autrey" },
    { id: 12, title: "A Hex on Honeysuckle Lane: A Rivals to Lovers Paranormal Romance (Haven's Hill Book 1)", author: "Caroline Laine" },
    { id: 13, title: "The Deal (Off-Campus Book 1)", author: "Elle Kennedy" },
  ],
  scifi: [
    { id: 7, title: "Dune", author: "Frank Herbert" },
    { id: 8, title: "Foundation", author: "Isaac Asimov" },
  ],
  sliceoflife: [
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
