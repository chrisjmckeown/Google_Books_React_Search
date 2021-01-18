import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export function DeleteBtn(props) {
  return (
    <button type='button' {...props} className='btn btn-danger btn-block'>
      Delete
    </button>
  );
}

export function SaveBtn(props) {
  return (
    <button type='button' {...props} className='btn btn-success btn-block'>
      Save
    </button>
  );
}

export function PreviewBtn(props, { link }) {
  return (
    <a
      role='button'
      {...props}
      className='btn btn-info btn-block'
      rel='noreferrer noopener'
      target='_blank'
    >
      Preview
    </a>
  );
}
