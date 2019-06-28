import React from 'react';
import Button from './Button/Button';

const ControlButton = () => {
    return (
        <div className="Control-Button col-md-12 d-flex mb-3 pl-0">
            <Button text="Test"/>
            <Button text="Pause"/>
            <Button text="Resume"/>
        </div>
    );
};

export default ControlButton; 