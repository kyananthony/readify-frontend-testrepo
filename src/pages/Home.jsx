import React, { useState } from "react";
import { Carousel, Card, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Make sure Sidebar.css exists for styling

const booksByGenre = {
  horror: ["Dracula", "It", "Frankenstein"],
  comedy: ["Good Omens", "Hitchhiker's Guide", "Catch-22"],
  romance: ["Pride and Prejudice", "The Notebook", "Jane Eyre"],
  "sci-fi": ["Dune", "Foundation", "Neuromancer"],
  "slice of life": ["Norwegian Wood", "A Man Called Ove", "Tuesdays with Morrie"],
  adventure: ["The Hobbit", "Treasure Island", "Moby-Dick"],
};

const Home = () => {
  const [hoveredGenre, setHoveredGenre] = useState(null);

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
          <Row>
            {Object.keys(booksByGenre).map((genre, index) => (
              <Col md={3} key={index} className="position-relative">
                <div
                  className="genre-container"
                  onMouseEnter={() => setHoveredGenre(genre)}
                  onMouseLeave={() => setHoveredGenre(null)}
                >
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Title>{genre.charAt(0).toUpperCase() + genre.slice(1)}</Card.Title>
                      <Button as={Link} to={`/genre/${genre}`} variant="primary">
                        View Books
                      </Button>
                    </Card.Body>
                  </Card>

                  {/* Sidebar that appears on hover */}
                  {hoveredGenre === genre && (
                    <div className="sidebar">
                      <h5>Books in {genre}</h5>
                      <ul>
                        {booksByGenre[genre].map((book, i) => (
                          <li key={i}>{book}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
