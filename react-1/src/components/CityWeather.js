import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import WbSunnyIcon from '@material-ui/icons/WbSunny';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import WbCloudyIcon from '@material-ui/icons/WbCloudy';
import AcUnitIcon from '@material-ui/icons/AcUnit';

export default class CityWeather extends React.Component {

    
render() {
const { City,Temp,Icon} = this.props; 
let Icn

switch (Icon) {
    case 'Солнечно': Icn = <WbSunnyIcon /> 
    break
    case 'Снег':  Icn = <AcUnitIcon />
    break
    case 'Облачно': Icn = <WbCloudyIcon />
    break
    case 'Дождь': Icn = <BeachAccessIcon />
    break
    default: Icn = <></>
 }


  return (
      <ListItem>
      <ListItemAvatar>
        <Avatar>
        {Icn}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={City} secondary={Temp} />
    </ListItem>
       );
}
}