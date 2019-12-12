import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './Menu';

import Main from './Main';
import CityWeather from '../containers/CityWeatherContr';
//import City from 'City';

const menu = [
  {
    title: 'Home',
    link: '/home'
  },
  {
    title: 'Москва',
    link: '/city/524901'
  },
  {
    title: 'Сочи',
    link: '/city/491422'
  }
  
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
          <Route exact path='/city' component={CityWeather}/>
          <Route exact path='/city/:id' render={({match}) => {
           return (<CityWeather Value={match.params.id}/>)
          }
          }/>
        </Switch>
      </div>
    </div>
  );
};

export default Routes;