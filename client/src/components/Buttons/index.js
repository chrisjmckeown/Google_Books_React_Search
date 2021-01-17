import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export function DeleteBtn(props) {
  return (
    <span className='delete-btn' {...props} role='button' tabIndex='0'>
      ✗
    </span>
  );
}

export function SaveBtn(props) {
  return (
    <button type='button' {...props} className='btn btn-success'>
      Save
    </button>
  );
}
