import React from 'react';

function MenuBar({
  setClickedItem,
  setActiveSpan,
  activeSpan,
  defaultActiveSpan,
  inactiveSpan,
}) {
  /*

  The 'span' tags below are the menu items. Think about the way a menu
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  const handleClick = (e) => {
    const id = e.target.id ? e.target.id : e.target.parentNode.id;
    setClickedItem(id);
    setActiveSpan({ ...inactiveSpan, [id]: 'item active' });
  };

  // const handleIconClick = (e) => {
  //   let name = e.target.parentNode.id;
  //   setClickedItem(e.target.parentNode.id);
  //   setActiveSpan({ ...inactiveSpan, [name]: 'item active' });
  //   console.log(name);
  // };

  return (
    <div className='ui four item menu'>
      <span className={activeSpan.profile} id='profile' onClick={handleClick}>
        <i className='user large icon' />
      </span>

      <span className={activeSpan.photos} id='photos' onClick={handleClick}>
        <i className='photo large icon' />
      </span>

      <span
        className={activeSpan.cocktails}
        id='cocktails'
        onClick={handleClick}
      >
        <i className='cocktail large icon' />
      </span>

      <span className={activeSpan.pokemon} id='pokemon' onClick={handleClick}>
        <i className=' themeisle large icon' />
      </span>
    </div>
  );
}

export default MenuBar;
