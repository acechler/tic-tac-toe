// src/Square.js
import React from 'react';

const Square = ({ value, onClick }) => {
  return (
    <button className='cell' onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
