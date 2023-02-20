import React, { useState } from 'react';

function Button(props) {
  const [block, setBlock] = useState(props.block || false);

  const buttonStyle = {
    display: block ? 'block' : 'inline-block',
    backgroundColor: props.color || 'gray',
    color: props.textColor || 'white',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '1.2rem',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
export default Button;

