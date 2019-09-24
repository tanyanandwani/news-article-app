import React from 'react';
import './Button.css';

const button = (props) => {
    return (
        <div className='Button btn' onClick={props.onClick}>
            <strong>{props.children}</strong>
        </div>
    );
}

export default button;