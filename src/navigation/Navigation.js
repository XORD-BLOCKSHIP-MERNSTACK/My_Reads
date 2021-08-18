import React from 'react';

// Importing Router, Switch ,Route from react-router-dom to add navigation between pages
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Importing Container/Pages
import Home from '../containers/Home';
import Search from '../containers/Search';

const Navigation = (props) => {
  const { books, move, search, reset, searchedBooks } = props;
  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/'
          render={() => <Home books={books} move={move} />}
        />
        <Route
          exact
          path='/search'
          render={() => (
            <Search
              books={books}
              move={move}
              search={search}
              reset={reset}
              searchedBooks={searchedBooks}
            />
          )}
        />
        <Route>Error 404</Route>
      </Switch>
    </Router>
  );
};

export default Navigation;
