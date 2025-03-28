import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Row, Col, Modal, Button } from "react-bootstrap";

const booksByGenre = {
  horror: [
    { 
      id: 1, 
      title: "Dracula", 
      author: "Bram Stoker", 
      published: "1897", 
      rating: 4.5, 
      price: "$9.99", 
      preview: "A Gothic horror classic about Count Dracula's attempt to move from Transylvania to England to spread the undead curse. As Dracula's influence grows, a group of individuals must work together to stop him. Filled with suspense, dark themes, and unforgettable characters." 
    },
    { 
      id: 2, 
      title: "It", 
      author: "Stephen King", 
      published: "1986", 
      rating: 4.8, 
      price: "$12.99", 
      preview: "A terrifying tale of an evil entity that manifests as Pennywise the clown, preying on children's deepest fears. The story follows a group of misfit children who face this ancient evil. Their battle continues into adulthood as they confront what they thought they had left behind." 
    },
    { 
      id: 3, 
      title: "Nocticadia", 
      author: "Keri Lake, Julie Belfield", 
      published: "2020", 
      rating: 4.3, 
      price: "$8.99", 
      preview: "A dark and twisted tale of nightmares and gothic romance. Two lost souls are drawn together in a city where nightmares come to life. The line between the dream world and reality becomes increasingly blurred." 
    },
    { 
      id: 4, 
      title: "Red Rabbit", 
      author: "Alex Grecian", 
      published: "2021", 
      rating: 4.2, 
      price: "$11.99", 
      preview: "A horror thriller filled with suspense, mystery, and psychological tension. When a woman goes missing, the investigation uncovers chilling truths. The deeper they dig, the more dangerous the secrets become." 
    },
    { 
      id: 5, 
      title: "Blood Meridian", 
      author: "Cormac McCarthy", 
      published: "1985", 
      rating: 4.7, 
      price: "$13.99", 
      preview: "A brutal yet poetic exploration of violence in the American West. A nameless protagonist joins a group of Indian-hunters, encountering unspeakable horrors along the way. McCarthy's exploration of humanity's darkest side is profound and unforgettable." 
    },
    { 
      id: 6, 
      title: "Murder in the Mountains", 
      author: "Drew Stickland", 
      published: "2019", 
      rating: 4.1, 
      price: "$10.99", 
      preview: "A chilling murder mystery set against a rugged mountain backdrop. As a detective hunts down a killer, the isolation and harsh environment bring its own dangers. The investigation reveals surprising twists that keep you on edge." 
    },
    { 
      id: 7, 
      title: "Cold Lake", 
      author: "Jeff Carson", 
      published: "2018", 
      rating: 4.3, 
      price: "$9.49", 
      preview: "A detective thriller with chilling suspense and deep character development. In a small town by a frozen lake, a series of strange disappearances occurs. The detective must navigate dark secrets and treacherous paths to uncover the truth." 
    },
    { 
      id: 8, 
      title: "Ghost Canyon", 
      author: "Anthony M. Strong", 
      published: "2022", 
      rating: 4.6, 
      price: "$14.99", 
      preview: "A supernatural horror story set in a haunted canyon. The canyon is known for mysterious occurrences, and a group of explorers sets out to uncover its secrets. What they find is far darker than they could have imagined." 
    },
    { 
      id: 9, 
      title: "Outer Dark", 
      author: "Cormac McCarthy", 
      published: "1994", 
      rating: 4.4, 
      price: "$15.99", 
      preview: "A dark and eerie novel about exile, suffering, and destiny. Set in Appalachia, the story follows a woman on a quest to find her brother, confronting bleak realities. McCarthy's poetic writing highlights the starkness of human existence." 
    },
  ],
  comedy: [
    { 
      id: 10, 
      title: "Good Omens", 
      author: "Terry Pratchett & Neil Gaiman", 
      published: "1990", 
      rating: 4.7, 
      price: "$10.99", 
      preview: "An angel and a demon team up to prevent the apocalypse in this witty and hilarious novel. Aziraphale and Crowley must put aside their differences to stop Armageddon. Their misadventures and banter make for a delightfully absurd read." 
    },
    { 
      id: 11, 
      title: "The Hitchhiker's Guide to the Galaxy", 
      author: "Douglas Adams", 
      published: "1979", 
      rating: 4.8, 
      price: "$9.99", 
      preview: "A sci-fi comedy classic filled with absurd humor and intergalactic adventures. Arthur Dent, an ordinary man, is swept off Earth before it's destroyed. His journey across the cosmos is filled with strange encounters and witty commentary on life." 
    },
    { 
      id: 12, 
      title: "The Office BFFs", 
      author: "Jenna Fischer, Angela Kinsey", 
      published: "2022", 
      rating: 4.5, 
      price: "$14.99", 
      preview: "A heartfelt and humorous look into the behind-the-scenes of The Office. Fischer and Kinsey share funny anecdotes, behind-the-scenes stories, and insights into their characters. It's a must-read for fans of the beloved TV series." 
    },
    { 
      id: 13, 
      title: "Whiskey Chaser", 
      author: "Lucy Score, Claire Kingsley", 
      published: "2021", 
      rating: 4.3, 
      price: "$12.99", 
      preview: "A laugh-out-loud romantic comedy with a strong-willed heroine and a small-town charm. When two stubborn hearts collide, sparks fly and misunderstandings abound. A charming read filled with humor and romance." 
    },
    { 
      id: 14, 
      title: "So That Happened", 
      author: "Katie Bailey", 
      published: "2019", 
      rating: 4.0, 
      price: "$11.99", 
      preview: "A hilarious rom-com filled with awkward moments and unexpected romance. The protagonist navigates the ups and downs of modern dating while trying to figure out her own life. Her journey is relatable, funny, and heartwarming." 
    },
    { 
      id: 15, 
      title: "Wanted Wed Or Alive", 
      author: "Jenna Fischer, Angela Kinsey", 
      published: "2023", 
      rating: 4.4, 
      price: "$13.49", 
      preview: "A quirky romance with a mix of humor and heartwarming moments. Two characters with vastly different goals find themselves on a wild adventure. The humor and chemistry between them make for an engaging and fun story." 
    },
    { 
      id: 16, 
      title: "Born Standing Up", 
      author: "Steve Martin", 
      published: "2007", 
      rating: 4.6, 
      price: "$10.49", 
      preview: "A memoir by legendary comedian Steve Martin, detailing his rise in stand-up comedy. Martin shares stories from his early days in comedy, offering both humor and insight. His journey from obscurity to fame is filled with wit and wisdom." 
    },
    { 
      id: 17, 
      title: "Bossypants", 
      author: "Tina Fey", 
      published: "2011", 
      rating: 4.8, 
      price: "$12.99", 
      preview: "A humorous memoir by comedian and actress Tina Fey, filled with wit and wisdom. Fey reflects on her career, life experiences, and the challenges she's faced. Her sharp humor and candid storytelling make for an unforgettable read." 
    },
    { 
      id: 18, 
      title: "Seriously, Murder?", 
      author: "Monica Hopes", 
      published: "2022", 
      rating: 4.2, 
      price: "$9.99", 
      preview: "A cozy mystery with a sharp sense of humor and unexpected twists. The protagonist must solve a murder that seems impossible to crack. With humor and determination, she uncovers secrets no one expected." 
    },
  ],
  // Add more genres and books here similarly
};


const GenrePage = () => {
  const { genreName } = useParams();
  const formattedGenre = genreName.replace(/-/g, " ").toLowerCase();
  const capitalizedGenre = formattedGenre.charAt(0).toUpperCase() + formattedGenre.slice(1);
  const books = booksByGenre[formattedGenre] || [];

  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleClose = () => {
    setSelectedBook(null);
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Books in {capitalizedGenre}</h2>
      {books.length > 0 ? (
        <Row>
          {books.map((book) => (
            <Col md={4} sm={6} xs={12} key={book.id} className="mb-4">
              <Card className="text-center" style={{ cursor: "pointer" }} onClick={() => handleBookClick(book)}>
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

      {/* Modal for book details */}
      <Modal show={!!selectedBook} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedBook?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Author:</strong> {selectedBook?.author}</p>
          <p>{selectedBook?.preview}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default GenrePage;
