import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import CityWeatherContr from '../containers/CityWeatherContr';
//import CityWeather from './CityWeather';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ShowWeather(props) {
  const classes = useStyles();
 

  return (
    <List className={classes.root}>
      {  props.cityList && props.cityList.map(obj => {
         return(
            <div key={obj.value}>
              <CityWeatherContr  Value={obj.value} City={obj.label} props/>
              <Divider  variant="inset" component="li" />
            </div>)
         })
      } 

    </List>
  );
}