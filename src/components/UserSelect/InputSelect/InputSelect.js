import React from 'react';
import './InputSelect.css';

const Input = (props) => {
    return (
        <input type="number" className="w-100 mt-2 custom-class" placeholder={props.text} {...props}/>
    );
};

export default Input;