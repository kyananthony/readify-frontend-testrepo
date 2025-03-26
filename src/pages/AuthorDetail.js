import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AuthorDetail = () => {
  const { authorId } = useParams(); // Get the author ID from the URL
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    // Fetch author details (replace with real data fetching logic)
    const authorsData = [
      { id: 1, name: "J.K. Rowling", books: ["Harry Potter", "Fantastic Beasts"] },
      { id: 2, name: "George Orwell", books: ["1984", "Animal Farm"] },
      { id: 3, name: "Harper Lee", books: ["To Kill a Mockingbird"] },
    ];
    const authorData = authorsData.find(author => author.id === parseInt(authorId));
    setAuthor(authorData);
  }, [authorId]);

  if (!author) return <div>Loading...</div>;

  return (
    <div>
      <h2>{author.name}</h2>
      <h4>Published Books:</h4>
      <ul>
        {author.books.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorDetail;
