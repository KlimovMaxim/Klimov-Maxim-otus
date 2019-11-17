import * as types from '../../constants/ActionTypes'

//export const addCity = text => ({ type: types.ADD_CITY, text })
//export const deleteCity = id => ({ type: types.DELETE_CITY, id })
//export const editCity = (id, text) => ({ type: types.EDIT_CITY, id, text })
export const loadCityWeAther = (weather) => ({ type: types.LOAD_CITY_WEATHER, weather })
// export const updateCityList = (cityList,loadedData) => {
//     return dispatch => {
//     dispatch(updateCity(cityList));
//     loadWether(cityList,loadedData);
//     }};

export const updateCityList = (cityList) => ({ type: types.UPDATE_CITYS_LIST, cityList})
  
  
//   export const addTodo = ({ title, userId }) => {
//     return dispatch => {
//       dispatch(addTodoStarted());
  
//       axios
//         .post(`https://jsonplaceholder.typicode.com/todos`, {
//           title,
//           userId,
//           completed: false
//         })
//         .then(res => {
//           dispatch(addTodoSuccess(res.data));
//         })
//         .catch(err => {
//           dispatch(addTodoFailure(err.message));
//         });
//     };
//   };
  
//   const addTodoSuccess = todo => ({
//     type: ADD_TODO_SUCCESS,
//     payload: {
//       ...todo
//     }
//   });
  
//   const addTodoStarted = () => ({
//     type: ADD_TODO_STARTED
//   });
  
//   const addTodoFailure = error => ({
//     type: ADD_TODO_FAILURE,
//     payload: {
//       error
//     }
//   });