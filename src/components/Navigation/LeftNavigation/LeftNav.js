import React from 'react';
import './LeftNav.css';
import Backdrop from '../../../assets/Backdrop/Backdrop';
import Categories from './Categories/Categories';

const leftNav = (props) => {

  let backdrop = null;
  if (props.isVisible) {
    backdrop = <Backdrop onClick={props.onToggle} />;
  }

  let catName = null;

  const catNameChanged = (event) => {
    catName = event.target.value;
  }

  return (
    <div>
      <div className={'Navigation ' + props.navClass}>
        <nav className='navbar LeftNav'>
          <div className='container NavMenus'>
            <div
              className='nav-brand col-lg-12 col-md-12 col-sm-12 col-xs-12'>
              <h3 className='MenuHeader'>Menu</h3>
            </div>
            <ul className='navbar-nav col-lg-12 col-md-12 col-sm-12 col-xs-12'>
              <Categories categories={props.categories} />
            </ul>
            <button
              className="btn btn-primary"
              type="button"
              data-toggle="collapse"
              data-target="#collapseCategoryAdder"
              aria-expanded="false"
              aria-controls="collapseCategoryAdder">
              Add Category</button>
            <div className="collapse" id="collapseCategoryAdder">
              Category Name <input type='text' onChange={catNameChanged} />
              <button onClick={() => props.addCat(catName)}>Add</button>
            </div>
          </div>
        </nav>
        <div className='Toggler' onClick={props.onToggle}>
          <div className='ToggleIcon'></div>
          <div className='ToggleIcon'></div>
          <div className='ToggleIcon'></div>
        </div>
      </div>
      {backdrop}
    </div>
  );
}

export default leftNav;