const APPKEY = "5056da805fc844e31bf6953dd84fd741";
//api.openweathermap.org/data/2.5/weather?q=Moscow,ru&appid=5056da805fc844e31bf6953dd84fd741&units=metric&lang=ru

export default {
  get: function(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APPKEY}&units=metric&lang=ru`;
    return fetch(url, { mode: "cors" }).then(r => r.json());
  },
  getForecast: function(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${APPKEY}&units=metric&cnt=7`;
    return fetch(url, { mode: "cors" })
      .then(r => r.json())
      .then(({ city, list }) => {
        return {
          name: city.name,
          forecast: list.map(item => {
            return {
              humidity: item.humidity,
              pressure: item.pressure,
              temp: item.temp.day
            };
          })
        };
      });
  },
  getCity: function(city) {
    const url = `./city.json`;
    return fetch(url, { mode: "cors" })
      .then(r => r.json())
      .then(({ results }) => {
        return results.map(r => ({ name: r.name, id: r.lat + r.lon }));
      });
  },
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
