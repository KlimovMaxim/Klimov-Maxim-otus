import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


export default class FavoritRadio extends React.Component {

    render() {
    const {isTrue,callback} = this.props;
    return (
        isTrue ? <FavoriteIcon onClick={callback} />
        :<FavoriteBorderIcon onClick={callback} />
    );
  }
}