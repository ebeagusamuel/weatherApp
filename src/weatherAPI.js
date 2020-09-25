const api = (() => {
  const API_KEY = 'af09756e68aba27bc3b213cc8773d0c8';
  const dataObj = {};

  const fetchWeatherData = async (city) => {
  
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`, {mode: 'cors'});
    let jsonObj = await response.json();

    if(jsonObj['cod'] === 200){
      dataObj['temp'] = jsonObj['main']['temp'];
      dataObj['maxTemp'] = jsonObj['main']['temp_max'];
      dataObj['minTemp'] = jsonObj['main']['temp_min'];
      dataObj['humidity'] = jsonObj['main']['humidity'];
      dataObj['pressure'] = jsonObj['main']['pressure'];
      dataObj['windSpeed'] = jsonObj['wind']['speed'];
      dataObj['weather'] = jsonObj['weather'][0]['description'];
      dataObj['cod'] = jsonObj['cod'] 
      console.log(dataObj)
    }

    if(jsonObj['cod'] === 404){
      dataObj['cod'] = jsonObj['cod']
      dataObj['msg'] = jsonObj['message']
    }
  }

  return {fetchWeatherData, dataObj}
})()

export default api