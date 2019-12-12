
import Routes from '../components/Routes'
import { connect } from 'react-redux'


const mapStateToProps = state => {
  return state.default.loadedData;
};


export default connect(
 mapStateToProps,
 null
)(Routes)
