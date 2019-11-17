const APPKEY = "5056da805fc844e31bf6953dd84fd741";

export default {
  get: function(city,collback) {
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${APPKEY}&units=metric&lang=ru`;
    return fetch(url, { mode: "cors" }).then(r => r.json()).then(x => {collback(x)});
  },
  // getForecast: function(city) {
  //   const url = `https://api.openweathermap.org/data/2.5/forecast/daily?id=${city}&appid=${APPKEY}&units=metric&cnt=7`;
  //   return fetch(url, { mode: "cors" })
  //     .then(r => r.json())
  //     .then(({ city, list }) => {
  //       return {
  //         name: city.name,
  //         forecast: list.map(item => {
  //           return {
  //             humidity: item.humidity,
  //             pressure: item.pressure,
  //             temp: item.temp.day
  //           };
  //         })
  //       };
  //     });
  // },
  debounce:  (fn, time) => {
    let timeout;
  
    return function() {
      const functionCall = () => fn.apply(this, arguments);
  
      clearTimeout(timeout);
      timeout = setTimeout(functionCall, time);
    };
  },
  getIconLink: function (icon) {
    return `https://openweathermap.org/img/w/${icon}.png`;
  }
  ,
  hpaToMmhg: function(hpa) {
    return hpa && hpa * 0.750062;
  }
};
