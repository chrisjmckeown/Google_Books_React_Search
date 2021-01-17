import React, { useState } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, BookListItem } from "../components/List";
import { Input, Button } from "../components/Form";

function Search(props) {
  const [books, setBooks] = useState({});
  const [googleBookSearch, setGoogleBookSearch] = useState("");

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { value } = event.target;
    setGoogleBookSearch(value);
  }

  // When the form is submitted, use the API.search Book method to search the book data
  function handleFormSubmit(event) {
    event.preventDefault();
    API.getGoogleBooks(googleBookSearch)
      .then((res) => {
        setBooks(res.data.items);
      })
      .catch((err) => console.log(err));
  }

  return (
    <Container>
      <Row>
        <Col size='xs-12'>
          <h1>Search for a Book!</h1>
        </Col>
      </Row>
      <br />
      <form>
        <Row>
          <Col size='xs-9 sm-10'>
            <Input
              name='GoogleBookSearch'
              value={googleBookSearch}
              onChange={handleInputChange}
              placeholder='Search For a Book'
            />
          </Col>
          <Col size='xs-3 sm-2'>
            <Button
              onClick={handleFormSubmit}
              type='success'
              className='input-lg'
            >
              Search
            </Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col size='xs-12'>
            {!books.length ? (
              <h2 className='text-center'>No Books to found</h2>
            ) : (
              <List>
                {books.map((book) => {
                  return (
                    <BookListItem
                      key={book.id}
                      title={book.volumeInfo.title}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.smallThumbnail}
                      link={book.volumeInfo.previewLink}
                      authors={book.volumeInfo.authors}
                    />
                  );
                })}
              </List>
            )}
          </Col>
        </Row>
      </form>
    </Container>
  );
}

export default Search;
