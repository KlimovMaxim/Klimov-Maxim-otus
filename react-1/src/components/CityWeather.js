import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import api from '../api/weather';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';


export default class CityWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true};
    // console.log(props);
  }


  componentDidMount() {


    if (this.props.loadedData && this.props.loadedData.find(m => m.id === this.props.Value)) {
      console.log('Нашли id:' + this.props.Value);
      const data = this.props.loadedData.find(m => m.id === this.props.Value);
      console.log(data);

      if (this.props.City)
        {this.setState({ loading: false, weather: data, cityName: this.props.City});}
      else
        {this.setState({ loading: false, weather: data, cityName:  data[0].name});}
    }
    else {
      console.log('Не нашли id:' + this.props.Value);

      let loadData = (data) => {
        this.setState({ loading: false, weather: data, cityName: data[0].name});
        this.props.loadCityWeAther(data);
      };

      api.get(this.props.Value, loadData);
      this.setState({ loading: true });
    }
  }

  render() {

    let Icn;
    let Temp;

    if (this.state.loading) {
      Icn = <HourglassEmptyIcon />
      Temp = 'Loading...'
    }
    else 
    {
      Icn = <img alt={this.state.weather[0].weather[0].description} src={`https://openweathermap.org/img/w/${this.state.weather[0].weather[0].icon}.png`} />
      Temp = this.state.weather[0].main.temp
    };

    return (

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            {Icn}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={this.state.cityName} secondary={Temp+' ℃'} />
      </ListItem>
    );
  }
}