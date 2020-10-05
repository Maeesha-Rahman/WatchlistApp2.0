import React from 'react';
// import firebase from '../firebase';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Header from './Header';
import SearchBar from './SearchBar';
import MovieList from './MovieList'
// import MovieDetail from './MovieDetail'


const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <div>
          {/* <Header /> */}
          <SearchBar />
          <Switch>
            <Route path="/" exact component={MovieList} />
            {/* <Route path="/movies/:id" exact component={MovieDetail} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
