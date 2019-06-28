import React from 'react';
import Heading from '../Heading/Heading';
import './Layout.css';
import UserText from '../UserText/UserText';
import UserSelect from '../UserSelect/UserSelect';
import ControlButton from '../ControlButton/ControlButton';

const Layout = () => {
    return (
      <div className="layout col-md-6 offset-3 border">
		  <Heading/>
		  <UserText/>
		  <UserSelect/>
		  <ControlButton/>
      </div>
    );
}
  
export default Layout;