import React from 'react';
import FavoritRadio from './FavoritRadio';
import TextField from '@material-ui/core/TextField';

export default class AddCity extends React.Component {
    constructor() {
      super();
      this.state = { };
    }

    handleChange = name => event => {
        console.log(name+' '+event);
        //setValues({ ...values, [name]: event.target.value });
      };

    render(){
    return (

        <form  noValidate autoComplete="off">
        
         <TextField
          id="outlined-city"
          label="City"
          onChange={this.handleChange('city')}
          margin="normal"
          variant="outlined"
        />
        <FavoritRadio isTrue={false} callback={console.log('callback')}/>
        </form>
    );
  }
}



  
 
  