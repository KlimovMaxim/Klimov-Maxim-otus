import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import api from '../api/weather';

/*import WbSunnyIcon from '@material-ui/icons/WbSunny';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import WbCloudyIcon from '@material-ui/icons/WbCloudy';
import AcUnitIcon from '@material-ui/icons/AcUnit';
*/

export default class CityWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(props);
  }

  componentDidMount() {
    if (this.props.loadedData && this.props.loadedData.find(m => m.id === this.props.Value ))
    {
     console.log('Нашли id:'+this.props.Value+'('+this.props.City+')');
    }
    else
    {
     console.log('Не нашли id:'+this.props.Value+'('+this.props.City+')');
      api.get(this.props.Value,this.props.loadCityWeAther);
    }
  }
    
render() {
// if (Temp == '?')
// {
//   data && Temp = data.main.temp
// }

// switch (Icon) {
//     case 'Солнечно': Icn = <WbSunnyIcon /> 
//     break
//     case 'Снег':  Icn = <AcUnitIcon />
//     break
//     case 'Облачно': Icn = <WbCloudyIcon />
//     break
//     case 'Дождь': Icn = <BeachAccessIcon />
//     break
//     case 'Неизвестно': 
//     break
//     default: Icn = <></>
//  }
let Icn
let Temp 
//console.log(this.state)

// if (this.state && this.state.weather[0].icon) {
//     Icn = <img src={`https://openweathermap.org/img/w/${this.state.weather[0].icon}.png` }/>
//     Temp = this.state.main.temp
//   } 
// else {
//     Icn = <></>
//     Temp = '?'
//   }


  return (
     
      <ListItem>
      <ListItemAvatar>
        <Avatar>
        {Icn}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={this.props.City} secondary={Temp}  />
    </ListItem>
       );
}
}