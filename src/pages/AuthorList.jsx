import React from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const authors = [
  { id: 1, name: "J.K. Rowling", books: "Harry Potter Series" },
  { id: 2, name: "George R.R. Martin", books: "A Song of Ice and Fire" },
  { id: 3, name: "J.R.R. Tolkien", books: "The Lord of the Rings" },
  { id: 4, name: "Agatha Christie", books: "Murder on the Orient Express" },
  { id: 5, name: "Stephen King", books: "The Shining" },
  { id: 6, name: "Jane Austen", books: "Pride and Prejudice" },
  { id: 7, name: "Mark Twain", books: "Adventures of Huckleberry Finn" },
  { id: 8, name: "Ernest Hemingway", books: "The Old Man and the Sea" },
  { id: 9, name: "Harper Lee", books: "To Kill a Mockingbird" },
  { id: 10, name: "F. Scott Fitzgerald", books: "The Great Gatsby" },
  { id: 11, name: "Charles Dickens", books: "A Tale of Two Cities" },
  { id: 12, name: "Leo Tolstoy", books: "War and Peace" },
  { id: 13, name: "Gabriel García Márquez", books: "One Hundred Years of Solitude" },
  { id: 14, name: "Fyodor Dostoevsky", books: "Crime and Punishment" },
  { id: 15, name: "Homer", books: "The Odyssey" },
  { id: 16, name: "William Shakespeare", books: "Hamlet" },
  { id: 17, name: "Victor Hugo", books: "Les Misérables" },
  { id: 18, name: "Emily Brontë", books: "Wuthering Heights" },
  { id: 19, name: "Herman Melville", books: "Moby-Dick" },
  { id: 20, name: "Jules Verne", books: "Twenty Thousand Leagues Under the Sea" },
  { id: 21, name: "George Orwell", books: "1984" },
  { id: 22, name: "Aldous Huxley", books: "Brave New World" },
  { id: 23, name: "Arthur Conan Doyle", books: "Sherlock Holmes Series" },
];

const AuthorList = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Author List</h2>
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Author Name</th>
            <th>Famous Books</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author.id}>
              <td>{author.id}</td>
              <td>
                {/* Link to the detailed author page */}
                <Link to={`/author/${author.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                  {author.name}
                </Link>
              </td>
              <td>{author.books}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AuthorList;
