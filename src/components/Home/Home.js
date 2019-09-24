import React from 'react';
import { Route } from 'react-router-dom';
import ArticleListContainer from '../Articles/ArticlesList/ArticleListContainer';
import ArticleContainer from '../Articles/ArticleContainer';
import './Home.css';

const home = (props) => {
    const comp = () => <div className='text-info'>
        <h4>Please select any article to view.</h4>
    </div>;

    const callArticleContainer=({match})=>(
        <ArticleContainer
                    articleId={match.params.articleId}
                    cats={props.cats}
                    posts={props.posts}
                    toRender={props.toRender}
                    changeCat={(article,newCat)=>props.changeCat(article,newCat)} />
    )

    const callArticleListContainer=({match})=>(
        <ArticleListContainer
        match={match}
        cats={props.cats}
        posts={props.posts}
        addArticle={props.addArticle}
        showArticleAdder={props.showArticleAdder}
        cancel={props.cancel}
        save={(title,body,cat)=>props.save(title,body,cat)} />
    );

    console.log('Inside home');
    return (<div className='container Home'>
        <Route exact path='/' component={comp} />
        <Route exact path='/category/:catId'
            component={callArticleListContainer} />
        <Route exact path='/article/:articleId'
            component={callArticleContainer} />
    </div>);

}

export default home;