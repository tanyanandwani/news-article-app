import React from 'react';
import { Link } from 'react-router-dom';
import Navigator from '../Navigator/Navigator';

const articleContainer = (props) => {

  const index = parseInt(props.articleId);

  let relLinks = null;
  let title = 'Article not found! :(';
  let body = null;
  let catId = null;
  let article=null;

  const toRender=props.toRender;
  const aList=props.posts;
  const cats=props.cats;

  if (toRender) {

    article=aList[index];

    relLinks = article.relatedLinks.map(articleId => {
      return <li key={articleId} >
        <Link
          to={`/article/${articleId}`}>
          {aList[articleId].title}</Link>
      </li>
    });

    title = article.title;

    body = article.body;

    catId = article.category;
  }
  let newCat=catId;

  const generateBody = () => {
    let str = '';
    if (body != null) {
      for (let i = 0; i < 5; i++) {
        str += body;
      }
    }
    return str;
  }

  const CatList = () => {
    return cats.map(cat => {
      return (
        <option key={cat.id} value={cat.id}>{cat.name}</option>
      )
    })
  }

  const categoryChanger = (event) => {
    newCat=event.target.value;
  }

  const ArticleBody = generateBody;
  return (
    <main>
      <Navigator index={index} />
      <hr />
      <div className='navbar'>
        <div></div><div className='text-success'>category : {catId}</div>
      </div>
      <h3>{title}</h3>
      <article><ArticleBody /></article>
      <hr />
      <h6>Other Articles you may like:</h6>
      <ul >
        {relLinks}
      </ul>
      <button
        className="btn btn-primary"
        type="button"
        data-toggle="collapse"
        data-target="#collapseArticleEditor"
        aria-expanded="false"
        aria-controls="collapseArticleEditor">
        Edit Article</button>
      <div className="collapse" id="collapseArticleEditor">
        <form>
          Category <select onChange={categoryChanger} defaultValue={catId}>
            <CatList/>
          </select>
          <button onClick={()=>props.changeCat(article,newCat)}>Change Category</button>
        </form>
      </div>
    </main>
  )
}

export default articleContainer;