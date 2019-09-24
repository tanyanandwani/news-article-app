import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../assets/Button/Button';

const navigator = (props) => (
    <div className='row col-12-lg'>
        <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
            <Link to={`/article/${props.index - 1}`}>
                <Button>PREV</Button>
            </Link>
        </div>
        <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8'></div>
        <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
            <Link to={`/article/${props.index + 1}`}>
                <Button>NEXT</Button>
            </Link>
        </div>
    </div>
)

export default navigator;