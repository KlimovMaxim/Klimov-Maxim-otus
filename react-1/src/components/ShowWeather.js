import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import CityWeather from './CityWeather'
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import WbCloudyIcon from '@material-ui/icons/WbCloudy';
import AcUnitIcon from '@material-ui/icons/AcUnit';


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
        <CityWeather City='Москва' Temp='+25' Icon={<BeachAccessIcon />} />
        <Divider variant="inset" component="li" />
        <CityWeather City='Питер' Temp='+15' Icon={<WbCloudyIcon />} />
        <Divider variant="inset" component="li" />
        <CityWeather City='Сочи' Temp='+35' Icon={<WbSunnyIcon />} />
        <Divider variant="inset" component="li" />
        <CityWeather City='Лабытнанги' Temp='-35' Icon={<AcUnitIcon />} />
        <Divider variant="inset" component="li" />
    </List>
  );
}