import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import CityWeather from './CityWeather'

//TODO убрать загрузку из JSON, тянуть из стора. и подключить API
import mock from '../store/mocks/CityWether.json'
 

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ShowWeather() {
  const classes = useStyles();
 

  return (
    <List className={classes.root}>
     { 
       mock.map(obj => {
        return(
        <>
        <CityWeather key={obj.ID} City={obj.City} Temp={obj.Temp} Icon={obj.Icon} />
        <Divider variant="inset" component="li" />
        </>)
        })
      }
    </List>
  );
}