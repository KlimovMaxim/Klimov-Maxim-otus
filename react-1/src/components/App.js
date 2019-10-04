import React from 'react';
import './App.css';
import AddCityContr from '../containers/AddCityContr';
import ShowWeather from './ShowWeather';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = { };
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <AddCityContr/>
        
        <ShowWeather/>

      </header>
     
    </div>
  );
}
}
