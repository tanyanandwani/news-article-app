import React from 'react';
import './Backdrop.css';

const backdrop =(props)=>(
<div 
className='Backdrop'
onClick={props.onClick} >
</div>
);

export default backdrop;