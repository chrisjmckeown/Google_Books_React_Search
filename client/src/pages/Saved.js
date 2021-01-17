import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks();
  }, []);

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <Container fluid>
      <Row>
        <Col size='md-6'>
          <Jumbotron>
            <h1>Saved books</h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Books;
