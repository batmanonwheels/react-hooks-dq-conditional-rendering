import React, { useState } from 'react';
import MenuBar from './MenuBar';
import { Profile, Photos, Cocktails, Pokemon } from './pages';

function MainBox() {
  /*
    Replace the code below! Depending on what menu item is selected in the menu,
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected.
    - Which component should have state?
    - Which component should have methods to control state?
    - Where should these methods be called?
  */
  const defaultActiveSpan = {
    profile: 'item active',
    photos: 'item',
    cocktails: 'item',
    pokemon: 'item',
  };

  const inactiveSpan = {
    profile: 'item',
    photos: 'item',
    cocktails: 'item',
    pokemon: 'item',
  };

  const [activeSpan, setActiveSpan] = useState(defaultActiveSpan);
  const [clickedItem, setClickedItem] = useState('profile');

  // console.log(clickedItem);

  const selectRenderedItem = () => {
    let detailsToDisplay;
    if (clickedItem === 'profile') {
      detailsToDisplay = <Profile />;
    } else if (clickedItem === 'photos') {
      detailsToDisplay = <Photos />;
    } else if (clickedItem === 'cocktails') {
      detailsToDisplay = <Cocktails />;
    } else if (clickedItem === 'pokemon') {
      detailsToDisplay = <Pokemon />;
    }
    return detailsToDisplay;
  };

  return (
    <div>
      <MenuBar
        setClickedItem={setClickedItem}
        setActiveSpan={setActiveSpan}
        activeSpan={activeSpan}
        defaultActiveSpan={defaultActiveSpan}
        inactiveSpan={inactiveSpan}
      />
      {selectRenderedItem()}
    </div>
  );
}

export default MainBox;
