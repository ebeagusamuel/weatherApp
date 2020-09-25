const api = (() => {
  const API_KEY = "af09756e68aba27bc3b213cc8773d0c8";
  const dataObj = {};

  const fetchWeatherData = async (city) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
      { mode: "cors" }
    );
    const jsonObj = await response.json();

    if (jsonObj.cod === 200) {
      dataObj.temp = jsonObj.main.temp;
      dataObj.maxTemp = jsonObj.main.temp_max;
      dataObj.minTemp = jsonObj.main.temp_min;
      dataObj.humidity = jsonObj.main.humidity;
      dataObj.pressure = jsonObj.main.pressure;
      dataObj.windSpeed = jsonObj.wind.speed;
      dataObj.weather = jsonObj.weather[0].description;
      dataObj.name = jsonObj.name;
      dataObj.country = jsonObj.sys.country;
      dataObj.cod = jsonObj.cod;
    }

    if (jsonObj.cod === "404") {
      dataObj.cod = jsonObj.cod;
      dataObj.msg = jsonObj.message;
    }
  };

  return { fetchWeatherData, dataObj };
})();

export default api;
