import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf"; // Import pdfjs ONLY ONCE
import { Container, Button } from "react-bootstrap";
import "./MyBooks.css";

// Set worker source (Make sure this is defined only ONCE in your entire project)
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js`;

const MyBooks = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const purchasedBooks = [
    { title: "Dracula", author: "Bram Stoker", pdf: "/pdfs/dracula.pdf" },
    { title: "Pride and Prejudice", author: "Jane Austen", pdf: "/pdfs/pride.pdf" },
  ];

  return (
    <Container className="my-books-container">
      <h1>My Books</h1>

      {purchasedBooks.map((book, index) => (
        <Button key={index} onClick={() => setSelectedBook(book)}>
          Read {book.title}
        </Button>
      ))}

      {selectedBook && (
        <div className="pdf-viewer">
          <h2>{selectedBook.title}</h2>
          <Document file={selectedBook.pdf}>
            <Page pageNumber={1} />
          </Document>
          <Button onClick={() => setSelectedBook(null)}>Close</Button>
        </div>
      )}
    </Container>
  );
};

export default MyBooks;
