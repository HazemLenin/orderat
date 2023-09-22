/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import pic from "./trolley.png";

const PopupIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePopup}><img src={pic} alt="" className='popimg' /></button>
      {isOpen && (
        <div className="popup">
          <ul>
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PopupIcon;