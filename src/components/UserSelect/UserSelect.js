import React from 'react';
import Input from './InputSelect/InputSelect'

const UserSelect = (props) => {
    return (
        <div className="user-select pt-2 m-auto">
            <Input text="set volumne 0 to 1" /> 
            <Input text="set rate 0.1 to 10" />
            <Input text="set pitch 0 to 2" />
        </div>
    );
};

export default UserSelect;