import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './Menu';

import Main from './Main';
import CityWeather from './CityWeather';
//import City from 'City';

const menu = [
  {
    title: 'Home',
    link: '/home'
  },
  {
    title: 'City #1',
    link: '/city/1'
  },


];

const Routes = () => {
  return (
    <div className="wrapper">
      <div className="main container">
        <Menu links={menu}/>
        <Switch>
          <Route exact path='/home' component={Main}/>
          <Route exact path='/'>
            <Redirect to='/home'/>
          </Route>
          <Route exact path='/city/:id' component={CityWeather}/>
        </Switch>
      </div>
    </div>
  );
};

export default Routes;