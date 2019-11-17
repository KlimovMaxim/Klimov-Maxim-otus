
import CityWeather from '../components/CityWeather'
import * as actionCreators from '../store/actions';
import { connect } from 'react-redux'


const mapStateToProps = state => {
  return state.default;
};


export default connect(
 mapStateToProps,
 actionCreators
)(CityWeather)
