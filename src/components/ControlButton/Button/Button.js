import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <button type="button" class="text btn col-4 mt-4">{props.text}</button>
    );
};

export default Button; 