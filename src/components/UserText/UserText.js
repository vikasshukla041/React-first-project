import React from 'react';
import './UserText.css';

const UserText = () => {
    return (
        <div className="user-text">
            <textarea type="text" class="main-text-area d-flex w-100 m-auto p-2" placeholder="Enter Text For Speech..."></textarea>
        </div>
    );
};

export default UserText;