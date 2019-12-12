
import ShowWeather from '../components/ShowWeather'
import * as actionCreators from '../store/actions';
import { connect } from 'react-redux'


const mapStateToProps = state => {
  return state.default;
};


export default connect(
 mapStateToProps,
 actionCreators
)(ShowWeather)
