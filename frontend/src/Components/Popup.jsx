import React from 'react';
import './../Css/Popup.css';

const Popup = ({ message, type, onClose }) => (
    <div className={`popup ${type}`}>
        <span>{message}</span>
        <button onClick={onClose}>X</button>
    </div>
);

export default Popup;
