import AddCity from '../components/AddCity'
import * as actionCreators from '../store/actions';
import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//     ...bindActionCreators({ updateCityList}, dispatch)
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   updateCityList: cityList => dispatch(updateCityList(cityList))
// })

export default connect(
 null,
 actionCreators
)(AddCity)


  