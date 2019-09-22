import * as types from '../../constants/ActionTypes'

export const addCity = text => ({ type: types.ADD_CITY, text })
export const deleteCity = id => ({ type: types.DELETE_CITY, id })
export const editCity = (id, text) => ({ type: types.EDIT_CITY, id, text })
export const showCityWether = id => ({ type: types.SHOW_CITY_WETHER, id })
export const showAllCityWether = () => ({ type: types.SHOW_ALL_CITY_WETHER })