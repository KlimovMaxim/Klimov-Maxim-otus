import * as types from '../../constants/ActionTypes'

//export const addCity = text => ({ type: types.ADD_CITY, text })
//export const deleteCity = id => ({ type: types.DELETE_CITY, id })
//export const editCity = (id, text) => ({ type: types.EDIT_CITY, id, text })
export const loadCityWether = id => ({ type: types.LOAD_CITY_WETHER, id })
export const loadAllCityWether = () => ({ type: types.LOAD_ALL_CITY_WETHER })
export const updateCityList = (cityList) => ({ type: types.UPDATE_CITYS_LIST, cityList})