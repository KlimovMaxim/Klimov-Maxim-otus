import React from 'react';
import AddCityContr from '../containers/AddCityContr';
import ShowWeatherContr from '../containers/ShowWeatherContr';
import './App.css';

export default class App extends React.Component {
    render(){
    return (
     
      <div className="App">
        <header className="App-header">
          <AddCityContr/>
          <ShowWeatherContr/>
        </header>
      </div>
     
    );
  }
  }
  