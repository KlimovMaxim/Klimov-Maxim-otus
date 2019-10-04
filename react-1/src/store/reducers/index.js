import {UPDATE_CITYS_LIST} from '../../constants/ActionTypes'
import { cityList } from '../../api/cityList'
  
  const initialState = []
 
  
  export default function wether(state = initialState, action) {
    switch (action.type) {
        case UPDATE_CITYS_LIST:
          return [...state, {citys: action.cityList}];
      // case ADD_CITY:
      //   return [
      //     ...state,
      //     {
      //       id: state.reduce((maxId, city) => {
      //         return Math.max(city.id, maxId);
      //       }, -1) + 1,
      //       text: action.text
      //     }
      //   ]
  
      // case DELETE_CITY:
      //   return state.filter(city =>
      //     city.id !== action.id
      //   )
  
      // case EDIT_CITY:
      //   return state.map(city =>
      //     city.id === action.id ?
      //       { ...city, text: action.text } :
      //       city
      //   )

  
      // case SHOW_CITY_WETHER:
      //   return state.map(city =>
      //     city.id === action.id ?
      //       { ...city, completed: !city.completed } :
      //       city
      //   )
  
      // case SHOW_ALL_CITY_WETHER:
      //   const areAllMarked = state.every(city => city.completed)
      //   return state.map(city => ({
      //     ...city,
      //     completed: !areAllMarked
      //   }))
  
      default:
        return state
    }
  }
  