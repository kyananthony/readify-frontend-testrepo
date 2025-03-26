import React from "react";
import { Container, Table } from "react-bootstrap";

const categories = [
  { id: 1, name: "Horror" },
  { id: 2, name: "Comedy" },
  { id: 3, name: "Romance" },
  { id: 4, name: "Sci-Fi" },
  { id: 5, name: "Slice of Life"},
  { id: 6, name: "Adventure"},
];

const CategoryList = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Category List</h2>
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Category Name</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default CategoryList;
