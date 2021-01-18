import React from "react";
import "./style.css";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import Thumbnail from "../Thumbnail";
import { SaveBtn, DeleteBtn, PreviewBtn } from "../Buttons";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className='list-overflow-container'>
      <ul className='list-group'>{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className='list-group-item'>{children}</li>;
}

export function BookListItem({ authors, title, description, image, link }) {
  // Saves a book from the database
  function saveBook() {
    const bookdata = {
      authors,
      title,
      description,
      image,
      link,
    };
    console.log(bookdata);
    API.saveBook(bookdata);
  }

  return (
    <li className='list-group-item'>
      <Container>
        <Row>
          <Col size='xs-5 sm-3'>
            <Thumbnail src={image || "https://placehold.it/300x300"} />
            <br />
            <SaveBtn onClick={() => saveBook()} />
            <PreviewBtn href={link} />
          </Col>
          <Col size='xs-7 sm-8'>
            <h3>{title}</h3>
            <h3>{authors}</h3>
            <p>Description: {description}</p>
          </Col>
        </Row>
      </Container>
    </li>
  );
}

export function SavedBookListItem({
  handleBtnClick,
  authors,
  title,
  description,
  image,
  link,
}) {
  return (
    <li className='list-group-item'>
      <Container>
        <Row>
          <Col size='xs-4 sm-2'>
            <Thumbnail src={image || "https://placehold.it/300x300"} />
            <DeleteBtn onClick={handleBtnClick} />
          </Col>
          <Col size='xs-8 sm-9'>
            <h3>{title}</h3>
            <h3>{authors}</h3>
            <p>Description: {description}</p>
            <a rel='noreferrer noopener' target='_blank' href={link}>
              Preview
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
