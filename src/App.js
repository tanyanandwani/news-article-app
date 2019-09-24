import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/Home';
import LeftNav from './components/Navigation/LeftNavigation/LeftNav';
import axios from 'axios';
import TopNav from './components/Navigation/TopNav/TopNav';

class App extends Component {

  state = {
    posts: [],
    toRender: false,
    cats: [],
    blogClass: 'col-lg-9',
    navClass: 'Open',
    isVisible: true,
    showArticleAdder: false,
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(pst => {
        let posts = [];
        let cats = [];
        let arts = [];

        pst.data.splice(0, 6).map(p => {
          posts = [...posts, {
            id: p.id,
            title: p.title,
            body: p.body,
            category: 0
          }];
          arts = [...arts, p.id];
        });

        cats = [...cats, {
          id: 0,
          name: 'Category 0',
          articles: arts,
        }
        ];
        arts = [];

        pst.data.splice(0, 10).map(p => {
          posts = [...posts, {
            id: p.id,
            title: p.title,
            body: p.body,
            category: 1
          }];
          arts = [...arts, p.id];
        });

        cats = [...cats, {
          id: 1,
          name: 'Category 1',
          articles: arts,
        }
        ];
        arts = [];

        pst.data.splice(0, 8).map(p => {
          posts = [...posts, {
            id: p.id,
            title: p.title,
            body: p.body,
            category: 2
          }];
          arts = [...arts, p.id];
        });

        cats = [...cats, {
          id: 2,
          name: 'Category 2',
          articles: arts,
        }
        ];
        arts = [];

        pst.data.splice(0, 7).map(p => {
          posts = [...posts, {
            id: p.id,
            title: p.title,
            body: p.body,
            category: 3
          }];
          arts = [...arts, p.id];
        });

        cats = [...cats, {
          id: 3,
          name: 'Category 3',
          articles: arts,
        }
        ];
        arts = [];

        pst.data.splice(0, 15).map(p => {
          posts = [...posts, {
            id: p.id,
            title: p.title,
            body: p.body,
            category: 4
          }];
          arts = [...arts, p.id];
        });

        cats = [...cats, {
          id: 4,
          name: 'Category 4',
          articles: arts,
        }
        ];
        arts = [];

        pst.data.splice(0, 5).map(p => {
          posts = [...posts, {
            id: p.id,
            title: p.title,
            body: p.body,
            category: 5
          }];
          arts = [...arts, p.id];
        });

        cats = [...cats, {
          id: 5,
          name: 'Category 5',
          articles: arts,
        }
        ];
        arts = [];

        pst.data.splice(0, 9).map(p => {
          posts = [...posts, {
            id: p.id,
            title: p.title,
            body: p.body,
            category: 6
          }];
          arts = [...arts, p.id];
        });

        cats = [...cats, {
          id: 6,
          name: 'Category 6',
          articles: arts,
        }
        ];
        arts = [];

        pst.data.splice(0, 16).map(p => {
          posts = [...posts, {
            id: p.id,
            title: p.title,
            body: p.body,
            category: 7
          }];
          arts = [...arts, p.id];
        });

        cats = [...cats, {
          id: 7,
          name: 'Category 7',
          articles: arts,
        }
        ];
        arts = [];

        pst.data.splice(0, 12).map(p => {
          posts = [...posts, {
            id: p.id,
            title: p.title,
            body: p.body,
            category: 8
          }];
          arts = [...arts, p.id];
        });

        cats = [...cats, {
          id: 8,
          name: 'Category 8',
          articles: arts,
        }
        ];
        arts = [];

        pst.data.splice(0, 7).map(p => {
          posts = [...posts, {
            id: p.id,
            title: p.title,
            body: p.body,
            category: 9
          }];
          arts = [...arts, p.id];
        });

        cats = [...cats, {
          id: 9,
          name: 'Category 9',
          articles: arts,
        }
        ];
        arts = [];

        pst.data.splice(0, 5).map(p => {
          posts = [...posts, {
            id: p.id,
            title: p.title,
            body: p.body,
            category: 10
          }];
          arts = [...arts, p.id];
        });

        cats = [...cats, {
          id: 10,
          name: 'Category 10',
          articles: arts,
        }
        ];

        posts.map((al, index) => {

          switch (index % 9) {
            case 0:
              al.relatedLinks = [43, 2, 7, 6, 89, 45];
              break;
            case 1:
              al.relatedLinks = [0, 4, 76, 23, 99, 46, 79, 42];
              break;
            case 2:
              al.relatedLinks = [1, 56, 12, 44, 9, 8, 76, 97, 43];
              break;
            case 3:
              al.relatedLinks = [33, 56, 23, 87, 45, 89, 1, 4, 78, 32];
              break;
            case 4:
              al.relatedLinks = [11, 32, 44, 43, 89, 98, 76, 13, 26, 38];
              break;
            case 5:
              al.relatedLinks = [45, 15, 74, 76, 34, 7, 2, 87, 49];
              break;
            case 6:
              al.relatedLinks = [42, 47, 96, 36, 25, 65, 3, 1, 0];
              break;
            case 7:
              al.relatedLinks = [0, 15, 26, 78, 8, 2, 5];
              break;
            case 8:
              al.relatedLinks = [0, 3, 81, 4];
              break;
          }

        })

        console.log(posts);
        console.log(cats);

        this.setState({ posts: posts });
        this.setState({ cats: cats });
        this.setState({ toRender: true });
      });
  }

  togglerClickHandler = () => {
    if (this.state.isVisible) {
      this.setState({
        navClass: 'Close',
        isVisible: false,
        blogClass: 'col-lg-12',
      });
    } else {
      this.setState({
        navClass: 'Open',
        isVisible: true,
        blogClass: 'col-lg-9',
      });
    }
  }

  addCategoryHandler = (catName) => {
    const cats = [...this.state.cats, {
      id: this.state.cats.length,
      name: catName,
      articles: [],
    }];

    this.setState({ cats: cats });
  }

  changeCategoryHandler = (article, newCat) => {
    const articleId = article.id;
    const oldCat = article.category;

    //Change to Article
    const posts = [...this.state.posts].map(p => {
      if (p.id == articleId) {
        p.category = newCat
      }
      return p;
    });

    //Change to new Category
    const cats = [...this.state.cats];
    const cat = cats[newCat];
    const articles = [...cat.articles, articleId];
    cat.articles = articles;
    cats[newCat] = cat;

    //Change to old Category
    const oldCatArticles = cats[oldCat].articles;
    const articleIndex = oldCatArticles.map((aId, index) => {
      if (aId == articleId) {
        return index;
      }
    });
    oldCatArticles.splice(articleIndex, 1);
    cats[oldCat].articles = oldCatArticles;

    this.setState({
      posts: posts,
      cats: cats,
    });
  }

  addArticleHandler = () => {
    this.setState({
      showArticleAdder: true
    });
  }

  cancelAdder = () => {
    this.setState({
      showArticleAdder: false
    });
  }

  saveArticle = (title, body, cat) => {

    const id=this.state.posts.length+1;
    const posts = [...this.state.posts, {
      id: id,
      title: title,
      body: body,
      category: cat,
      relatedLinks:[],
    }];

    const cats=[...this.state.cats];
    const articles=[...cats[cat].articles,id];
    cats[cat].articles=articles;

    console.log(posts);
    console.log(cats);
    

    this.setState({
      posts: posts,
      cats:cats,
      showArticleAdder: false
    });
  }

  render() {
    console.log('Inside App');
    return (
      <Router>
        <div className='container-fluid row'>
          <div className='col-lg-3 col-md-3 col-sm-8 col-xs-8'>
            <LeftNav
              isVisible={this.state.isVisible}
              onToggle={this.togglerClickHandler}
              navClass={this.state.navClass}
              categories={this.state.cats}
              addCat={(catName) => this.addCategoryHandler(catName)}
            />
          </div>
          <div className={this.state.blogClass + ' col-md-12 col-sm-12 col-xs-12'}>
            <TopNav />
            <Home
              toRender={this.state.toRender}
              posts={this.state.posts}
              cats={this.state.cats}
              changeCat={(article, newCat) =>
                this.changeCategoryHandler(article, newCat)}
              addArticle={this.addArticleHandler}
              showArticleAdder={this.state.showArticleAdder}
              cancel={this.cancelAdder}
              save={(title, body, cat) => this.saveArticle(title, body, cat)} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
