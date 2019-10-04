import React from 'react';
import AsyncSelect from 'react-select/async';
import {cityList} from '../api/cityList.js'; 


const filterCitys = (inputValue) => {
  return cityList.filter(i =>
    i.label.toLowerCase().startsWith(inputValue.toLowerCase())
  );
};

const promiseOptions = inputValue =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterCitys(inputValue));
    }, 1000);
  });

const AddCity = (props)  =>
     (
      
      <AsyncSelect
        isMulti
        cacheOptions
        defaultOptions
        loadOptions={promiseOptions}
        onChange={props.updateCityList}
      />
    );

export default AddCity