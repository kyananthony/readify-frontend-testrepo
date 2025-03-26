import React from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const authors = [
  { id: 1, name: "J.K. Rowling", books: "Harry Potter Series" },
  { id: 2, name: "George R.R. Martin", books: "A Song of Ice and Fire" },
  { id: 3, name: "J.R.R. Tolkien", books: "The Lord of the Rings" },
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
