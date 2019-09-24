import React from 'react';
import Category from './Category/Category';

const categories = (props) => {

    const cats = props.categories.map((cat, index) => {
        return (
            <li
                className='NavLink nav-item'
                key={index} >
                
                <Category 
                catId={cat.id} 
                catName={cat.name} 
                articlesLength={cat.articles.length} />
            </li>
        );
    });

    return cats;

}

export default categories;