import React from 'react';
import './ArticleAdder.css'

const articleAdder = (props) => {

    let title='Default value';
    let body='Default value';
    let cat=props.catId;

    const titleChange=(event)=>{
        title=event.target.value;
    }

    const bodyChange=(event)=>{
        body=event.target.value;
    }

    return (
        <div className='ArticleAdder'>
            <div className='row'>
                Title <input 
                type='text' 
                defaultValue='Title of The Article'
                onChange={titleChange} />
            </div>
            <div className='row'>
                Body <textarea 
                className='ArticleBody'
                onChange={bodyChange} >
                    Your article body here.</textarea>
            </div>
            <div className='row'>
                Category <input 
                type='number' 
                value={cat} />
            </div>
            <div className='row'>
                <div 
                className='btn btn-default text-danger'
                onClick={props.cancel} >Cancel</div>
                <div 
                className='btn btn-default text-success'
                onClick={()=>props.save(title,body,cat)}>Save</div>
            </div>
        </div>
    );
}

export default articleAdder;