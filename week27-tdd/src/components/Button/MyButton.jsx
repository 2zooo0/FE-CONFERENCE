// src/components/Button/MyButton.jsx
import React from 'react';

const MyButton = (props) => {
    return (
        <button style={{ backgroundColor: props.backgroundColor }}>
            {props.children}
        </button>
    );
};

export default MyButton;