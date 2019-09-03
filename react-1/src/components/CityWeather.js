import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

export default class CityWeather extends React.Component {

    
render() {
const { City,Temp,Icon} = this.props;
  return (
      <ListItem>
      <ListItemAvatar>
        <Avatar>
        {Icon}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={City} secondary={Temp} />
    </ListItem>
       );
}
}