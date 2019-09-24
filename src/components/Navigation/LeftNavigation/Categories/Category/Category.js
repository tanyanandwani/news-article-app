import React from 'react';
import { Link } from 'react-router-dom';

const category = (props) => {
    return (
        <Link
            to={'/category/' + props.catId}
            className='nav-link'>
            {props.catName + ' (' + props.articlesLength + ')'}
        </Link>
    );
}

export default category;