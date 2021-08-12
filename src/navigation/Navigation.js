import React from 'react';

// Importing Router, Switch ,Route from react-router-dom to add navigation between pages
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Importing Container/Pages
import Home from '../containers/Home';
import Search from '../containers/Search';

const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/search' component={Search} />
        <Route>Error 404</Route>
      </Switch>
    </Router>
  );
};

export default Navigation;
