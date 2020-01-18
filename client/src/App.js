import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import Route from 'react-router-dom';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes</div>
      <Route path= '/' component ={MovieList} />

      <Route path = '/movies' component ={About} />

    </div>
  );
};

export default App;
