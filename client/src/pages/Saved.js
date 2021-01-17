import React, { useState, useEffect } from "react";
import API from "../utils/API";
// import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Thumbnail from "../components/Thumbnail";
import { DeleteBtn } from "../components/Buttons";

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
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then((res) => loadBooks())
      .catch((err) => console.log(err));
  }

  return (
    <Container>
      <Row>
        <Col size='xs-12'>
          <h1>Saved Books</h1>
        </Col>
      </Row>
      <br />
      <Row>
        <Col size='xs-12'>
          {!books.length ? (
            <h2 className='text-center'>No saved Books!</h2>
          ) : (
            <List>
              {books.map((book) => (
                <ListItem key={book._id}>
                  <Container>
                    <Row>
                      <Col size='xs-4 sm-2'>
                        <Thumbnail
                          src={book.image || "https://placehold.it/300x300"}
                        />
                        <DeleteBtn onClick={() => deleteBook(book._id)} />
                      </Col>
                      <Col size='xs-8 sm-9'>
                        <h3>{book.title}</h3>
                        <h3>{book.authors}</h3>
                        <p>Description: {book.description}</p>
                        <a
                          rel='noreferrer noopener'
                          target='_blank'
                          href={book.link}
                        >
                          Preview
                        </a>
                      </Col>
                    </Row>
                  </Container>
                </ListItem>
              ))}
            </List>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Books;
