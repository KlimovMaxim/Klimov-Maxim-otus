import React from 'react';
import './App.css';
import AddCity from './AddCity';
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
        <AddCity/>
        <ShowWeather/>

      </header>
     
    </div>
  );
}
}
