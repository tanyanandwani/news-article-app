import React from 'react';
import { Link } from 'react-router-dom';
import ArticleAdder from '../ArticleAdder/ArticleAdder';

const articleList = (props) => {
    const match=props.match;
    const cats=props.cats;
    const posts=props.posts;

    const catId = match.params.catId;
    let lst = <p className='text-danger'>No article found for this category!</p>;

    if (cats.length>catId) {
        lst = cats[catId].articles.map(articleId => (
            <li key={articleId} >
                <Link
                    to={`/article/${articleId-1}`}>
                    {posts[articleId - 1].title}</Link>
            </li>
        ));
    }

    let articleAdder=null;

    if(props.showArticleAdder){
        articleAdder=
        <ArticleAdder 
        cancel={props.cancel} 
        catId={catId}
        save={(title,body,cat)=>props.save(title,body,cat)} />;
    }

    const showList = (<div>
        <h4>Article List</h4>
        <ul>
            {lst}
        </ul>
    </div>);

    return (
        <div>
            {articleAdder}
            {showList}
            <button onClick={props.addArticle} className='btn btn-primary'>Add New Article</button>
        </div>
    );
}

export default articleList;