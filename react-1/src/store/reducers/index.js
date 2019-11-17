import {UPDATE_CITYS_LIST,LOAD_CITY_WEATHER} from '../../constants/ActionTypes'

  const initialState = {loadedData: null, cityList: null};
 
  export default function wether(state = initialState, action) {
    switch (action.type) {
        case UPDATE_CITYS_LIST:
          return  {...state, cityList: action.cityList};
         case LOAD_CITY_WEATHER:
              console.log(action);
             return {...state, loadedData: action.weather};
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
  