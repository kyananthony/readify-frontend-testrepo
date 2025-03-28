import React, { useState } from "react";
import { Card, Container, Row, Col, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const booksByGenre = {
  horror: [
    { 
      title: "Dracula", 
      author: "Bram Stoker", 
      published: "1897", 
      rating: 4.5, 
      image: "/images/dracula.jpg", 
      preview: "A classic Gothic novel that tells the story of Count Dracula's attempt to move from Transylvania to England and spread the undead curse. This novel explores themes of fear, superstition, and immortality. The battle between good and evil is at the heart of this thrilling tale." 
    },
    { 
      title: "It", 
      author: "Stephen King", 
      published: "1986", 
      rating: 4.7, 
      image: "/images/it.jpg", 
      preview: "A horror novel about a group of children who are terrorized by an evil entity that exploits their fears. The novel shifts between two timelines, exploring childhood trauma and the power of friendship. Pennywise, the terrifying clown, lurks in the shadows of Derry." 
    },
    { 
      title: "Nocticadia", 
      author: "Keri Lake, Julie Belfield", 
      published: "2020", 
      rating: 4.6, 
      image: "/images/nocticadia.jpg", 
      preview: "A dark and twisted tale of nightmares and gothic romance. It follows a troubled protagonist who seeks solace in a mysterious place, only to be entangled in a dangerous supernatural world. Themes of love, vengeance, and mystery dominate the storyline." 
    },
    { 
      title: "Red Rabbit", 
      author: "Alex Grecian", 
      published: "2017", 
      rating: 4.4, 
      image: "/images/red rabbit.jpg", 
      preview: "A horror thriller filled with suspense, mystery, and psychological tension. The story revolves around a complex murder investigation, where every clue leads to more questions. A chilling atmosphere and unexpected twists keep readers on edge." 
    },
    { 
      title: "Blood Meridian", 
      author: "Cormac McCarthy", 
      published: "1985", 
      rating: 4.9, 
      image: "/images/blood meridian.jpg", 
      preview: "A brutal yet poetic exploration of violence in the American West. The novel delves into the harsh realities of survival, the darkness of human nature, and the destructive path of the protagonist. A haunting tale that challenges the morality of its characters." 
    },
    { 
      title: "Murder in the Mountains", 
      author: "Drew Stickland", 
      published: "2021", 
      rating: 4.3, 
      image: "/images/murder.jpg", 
      preview: "A chilling murder mystery set against a rugged mountain backdrop. The story follows a detective as he unravels a series of murders that seem to be tied to long-buried secrets. With each clue, the stakes grow higher, and danger becomes inevitable." 
    },
    { 
      title: "Cold Lake", 
      author: "Jeff Carson", 
      published: "2019", 
      rating: 4.6, 
      image: "/images/lake.jpg", 
      preview: "A detective thriller with chilling suspense and deep character development. The investigation into a murder in a small town leads to shocking discoveries and unexpected alliances. The protagonist must confront his own demons while solving the case." 
    },
    { 
      title: "Ghost Canyon", 
      author: "Anthony M. Strong", 
      published: "2015", 
      rating: 4.2, 
      image: "/images/ghost.jpg", 
      preview: "A supernatural horror story set in a haunted canyon. The protagonist explores the terrifying mysteries of a ghostly place, uncovering secrets that should have remained hidden. The novel blends supernatural elements with psychological tension." 
    },
    { 
      title: "Outer Dark", 
      author: "Cormac McCarthy", 
      published: "1998", 
      rating: 4.4, 
      image: "/images/outer.jpg", 
      preview: "A dark and eerie novel about exile, suffering, and destiny. The protagonist embarks on a harrowing journey to find the child she abandoned. Themes of isolation and the relentless pursuit of redemption permeate this haunting tale." 
    },
  ],
  comedy: [
    { 
      title: "Good Omens", 
      author: "Neil Gaiman & Terry Pratchett", 
      published: "1990", 
      rating: 4.6, 
      image: "/images/omens.jpg", 
      preview: "An angel and a demon join forces to prevent the apocalypse, with plenty of humor and wit. This book is filled with quirky characters and clever satire on good and evil. The Antichrist is misplaced, leading to unexpected consequences." 
    },
    { 
      title: "The Hitchhiker's Guide to the Galaxy", 
      author: "Douglas Adams", 
      published: "1979", 
      rating: 4.7, 
      image: "/images/galaxy.gif", 
      preview: "A sci-fi comedy classic filled with absurd humor and intergalactic adventures. Arthur Dent's life is turned upside down when the Earth is destroyed, and he is taken on a wild journey through space. A satirical look at the absurdities of life, the universe, and everything." 
    },
    { 
      title: "The Office BFFs", 
      author: "Jenna Fischer, Angela Kinsey", 
      published: "2022", 
      rating: 4.5, 
      image: "/images/bffs.jpg", 
      preview: "A heartfelt and humorous look into the behind-the-scenes of *The Office*. The authors share stories from their time on set, offering insight into their friendship and the making of the beloved series. Fans of the show will enjoy the candid and funny anecdotes." 
    },
    { 
      title: "Whiskey Chaser", 
      author: "Lucy Score, Claire Kingsley", 
      published: "2021", 
      rating: 4.3, 
      image: "/images/whiskey.jpg", 
      preview: "A laugh-out-loud romantic comedy with a strong-willed heroine and a small-town charm. The protagonist finds herself in a complicated situation involving love and whiskey. Humor and romance collide in this heartwarming tale." 
    },
    { 
      title: "So That Happened", 
      author: "Katie Bailey", 
      published: "2020", 
      rating: 4.2, 
      image: "/images/that.jpg", 
      preview: "A hilarious rom-com filled with awkward moments and unexpected romance. The protagonist's life is turned upside down when a series of events lead her to question everything she thought she knew about love. A fun, witty story with plenty of laughs." 
    },
    { 
      title: "Wanted Wed Or Alive", 
      author: "Jenna Fischer, Angela Kinsey", 
      published: "2022", 
      rating: 4.5, 
      image: "/images/wed.jpg", 
      preview: "A quirky romance with a mix of humor and heartwarming moments. The book follows two women on their journey to find love and embrace their quirky sides. With humor and warmth, this story is filled with endearing moments." 
    },
    { 
      title: "Born Standing Up", 
      author: "Steve Martin", 
      published: "2007", 
      rating: 4.4, 
      image: "/images/born.jpg", 
      preview: "A memoir by legendary comedian Steve Martin, detailing his rise in stand-up comedy. Filled with wit and reflections on the world of comedy, it provides a personal look at his career. A charming and funny exploration of a comedian's life." 
    },
    { 
      title: "Bossypants", 
      author: "Tina Fey", 
      published: "2011", 
      rating: 4.8, 
      image: "/images/bossy.jpg", 
      preview: "A humorous memoir by comedian and actress Tina Fey, filled with wit and wisdom. She recounts her career, from *Saturday Night Live* to *30 Rock*, with plenty of laughs along the way. A sharp and hilarious look at her life in comedy." 
    },
    { 
      title: "Seriously, Murder?", 
      author: "Monica Hopes", 
      published: "2019", 
      rating: 4.1, 
      image: "/images/srs.jpg", 
      preview: "A cozy mystery with a sharp sense of humor and unexpected twists. The protagonist investigates a murder in a small town, but things are never as they seem. A delightful blend of humor and suspense that keeps readers guessing." 
    },
  ],
  romance: [
    { 
      title: "Pride and Prejudice", 
      author: "Jane Austen", 
      published: "1813", 
      rating: 4.8, 
      image: "/images/pride.jpg", 
      preview: "A timeless romance between Elizabeth Bennet and Mr. Darcy, filled with wit, misunderstandings, and social commentary. This novel explores themes of love, class, and personal growth. Their journey from initial disdain to deep affection is beautifully crafted." 
    },
    { 
      title: "The Notebook", 
      author: "Nicholas Sparks", 
      published: "1996", 
      rating: 4.6, 
      image: "/images/notebook.jpg", 
      preview: "A deeply emotional love story about devotion, passion, and the test of time. The relationship between Noah and Allie endures through years of separation and heartache. A powerful story of love's ability to transcend time and obstacles." 
    },
    { 
      title: "The Butcher", 
      author: "Penelope Sky", 
      published: "2017", 
      rating: 4.4, 
      image: "/images/butcher.jpg", 
      preview: "A dark and intense romance with a gripping storyline. The characters are caught in a passionate, dangerous love affair, full of tension and intrigue. The novel explores the intersection of love, power, and betrayal." 
    },
    { 
      title: "Lights Out", 
      author: "Navessa Allen", 
      published: "2021", 
      rating: 4.2, 
      image: "/images/lights.jpg", 
      preview: "A dramatic love story set in a dystopian world. The characters must navigate their feelings for each other amidst the backdrop of a collapsing society. Themes of survival, love, and hope shine through in this compelling narrative." 
    },
    { 
      title: "Dreams of a Highlander", 
      author: "Katy Baker", 
      published: "2018", 
      rating: 4.3, 
      image: "/images/dreams.jpg", 
      preview: "A time-travel romance set in the breathtaking Scottish Highlands. The protagonist finds herself transported to a past where love and danger are intertwined. A passionate love story that transcends time and fate." 
    },
    { 
      title: "Painted Scars", 
      author: "Neva Altaj", 
      published: "2020", 
      rating: 4.5, 
      image: "/images/painted.png", 
      preview: "An enemies-to-lovers mafia romance with deep emotions and thrilling moments. The characters' complicated relationship grows amidst betrayal, revenge, and love. A gripping story of passion and power." 
    },
    { 
      title: "Rules of the Heart", 
      author: "Clover Autrey", 
      published: "2019", 
      rating: 4.1, 
      image: "/images/rules.jpg", 
      preview: "A sweet and heartwarming small-town romance. The story follows two people with contrasting backgrounds who find love in an unexpected place. A charming tale of love, self-discovery, and second chances." 
    },
    { 
      title: "A Hex on Honeysuckle Lane", 
      author: "Caroline Laine", 
      published: "2021", 
      rating: 4.2, 
      image: "/images/hex.jpg", 
      preview: "A magical romance with a touch of supernatural intrigue. The protagonist uncovers a hidden world of witches while navigating her own romantic feelings. A blend of magic and love that enchants the reader." 
    },
    { 
      title: "The Deal", 
      author: "Elle Kennedy", 
      published: "2015", 
      rating: 4.7, 
      image: "/images/deal.jpg", 
      preview: "A fun and steamy sports romance with a witty heroine and a charming hero. The characters develop a fake relationship that leads to real feelings. The novel explores themes of trust, love, and self-acceptance." 
    },
  ],
};


const Home = () => {
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
    if (cart.some((cartItem) => cartItem.title === book.title)) {
      setMessage(`Starting to read: ${book.title}`);
    } else {
      setMessage("This book must be purchased first before reading.");
    }
  };

  return (
    <div>
      <section className="hero bg-primary text-white text-center py-5">
        <Container>
          <h1>Discover Your Next Favorite Read!</h1>
          <p className="lead">Explore a world of books at your fingertips.</p>
          <Button variant="light" size="lg">Start Reading</Button>
        </Container>
      </section>

      <section className="categories py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Explore by Category</h2>
          {Object.keys(booksByGenre).map((genre) => (
            <div key={genre} className="mb-5">
              <h3 className="text-center mb-3">{genre.charAt(0).toUpperCase() + genre.slice(1)}</h3>
              <Row>
                {booksByGenre[genre].map((book, index) => (
                  <Col key={index} md={4} sm={6} xs={12}>
                    <Card className="mb-4" style={{ cursor: "pointer", height: "460px" }}>
                      <Card.Img variant="top" src={book.image} alt={book.title} style={{ height: "250px", objectFit: "cover" }} onClick={() => handleBookClick(book)} />
                      <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Text>by {book.author}</Card.Text>
                        <Button variant="primary" onClick={() => handleAddToCart(book)}>Add to Cart</Button>
                        <Button variant="success" onClick={() => handleStartReading(book)} className="ms-2">Start Reading</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Container>
      </section>

      <Modal show={!!selectedBook} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedBook?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedBook?.image} alt={selectedBook?.title} className="img-fluid mb-3" style={{ width: "100%" }} />
          <p><strong>Author:</strong> {selectedBook?.author}</p>
          <p><strong>Published:</strong> {selectedBook?.published}</p>
          <p><strong>Rating:</strong> {selectedBook?.rating} ⭐</p>
          <p>{selectedBook?.preview}</p>
          {message && <p style={{ color: "red", fontWeight: "bold" }}>{message}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;