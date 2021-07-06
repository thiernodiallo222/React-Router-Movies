import React, { useState } from 'react';
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

import SavedList from './Movies/SavedList';
import { Route } from 'react-router-dom';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
 <> 
      <SavedList list={savedList} />
    <div>
      
       <Route exact path='/'
        component={MovieList} />
        {/* // render={props => <MovieList {...props} movie={movies} />} /> */}

       <Route exact path='/movie:id'
        render={props => <Movie {...props} movies={savedList} />} />

     </div>
        </>   
     
     );
   };
   
   export default App;
   
   
   
   // const item = props.items.find(
//     thing => `${thing.id}` === props.match.params.id
//   );