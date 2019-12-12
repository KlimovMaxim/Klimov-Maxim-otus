const APPKEY = "5056da805fc844e31bf6953dd84fd741";

export default {
  get: function(city,collback) {
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${APPKEY}&units=metric&lang=ru`;
    return fetch(url, { mode: "cors" }).then(r => r.json()).then(x => {collback([x])});
  }
};
