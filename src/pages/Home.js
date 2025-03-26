import React from "react";
import { Carousel, Card, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // ✅ Import Link

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-primary text-white text-center py-5">
        <Container>
          <h1>Discover Your Next Favorite Read!</h1>
          <p className="lead">Explore a world of books at your fingertips.</p>
          <Button variant="light" size="lg" block>Start Reading</Button>
        </Container>
      </section>

      {/* Featured eBooks */}
      <section className="featured-books py-5">
        <Container>
          <h2 className="text-center mb-4">Featured eBooks</h2>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Cover of The Great Gatsby book" />
              <Carousel.Caption>
                <h3>The Great Gatsby</h3>
                <p>by F. Scott Fitzgerald</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Cover of 1984 book" />
              <Carousel.Caption>
                <h3>1984</h3>
                <p>by George Orwell</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>

      {/* Categories Section */}
      <section className="categories py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Explore by Category</h2>
          <Row>
            {["Horror", "Comedy", "Romance", "Sci-Fi", "Slice of Life", "Adventure"].map((category, index) => (
              <Col md={3} key={index}>
                <Card className="text-center">
                  <Card.Body>
                    <Card.Title>{category}</Card.Title>
                    <Button as={Link} to={`/genre/${category.toLowerCase()}`} variant="primary">
                      View Books
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Author Highlights */}
      <section className="authors py-5">
        <Container>
          <h2 className="text-center mb-4">Featured Authors</h2>
          <Row>
            {["J.K. Rowling", "George Orwell", "Harper Lee"].map((author, index) => (
              <Col md={4} key={index}>
                <Card className="text-center">
                  <Card.Img variant="top" src="https://via.placeholder.com/150" alt={`Image of ${author}`} />
                  <Card.Body>
                    <Card.Title>{author}</Card.Title>
                    <Button as={Link} to={`/author/${author}`} variant="secondary">
                      View Books
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="testimonials bg-dark text-white py-5">
        <Container>
          <h2 className="text-center mb-4">What Readers Say</h2>
          <Carousel>
            <Carousel.Item>
              <p className="text-center">"Amazing collection of books! Highly recommend." - Alice</p>
            </Carousel.Item>
            <Carousel.Item>
              <p className="text-center">"A book lover’s paradise!" - Bob</p>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-3">
        <p>© 2025 Readify. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
