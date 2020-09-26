import api from './weatherAPI';

const tempConverter = (() => {
  const kelvinToCelcius = (kelvinTemp) => {
    const ans = (kelvinTemp - 273.515).toFixed(2);
    return `${ans}°C`;
  };

  const convertTemp = (element) => {
    const temp = document.getElementById('temp');

    if (temp.getAttribute('data-temp') === 'kelvin') {
      temp.setAttribute('data-temp', 'celcius');
      element.textContent = 'Convert to K';

      const kelvinTemp = api.dataObj.temp;
      const kelvinMinTemp = api.dataObj.minTemp;
      const kelvinMaxTemp = api.dataObj.maxTemp;

      const celciusTemp = kelvinToCelcius(kelvinTemp);
      const celciusMinTemp = kelvinToCelcius(kelvinMinTemp);
      const celciusMaxTemp = kelvinToCelcius(kelvinMaxTemp);

      temp.textContent = celciusTemp;
      document.getElementById('minTemp').textContent = celciusMinTemp;
      document.getElementById('maxTemp').textContent = celciusMaxTemp;
    } else {
      temp.setAttribute('data-temp', 'kelvin');
      element.textContent = 'Convert to °C';

      const kelvinTemp = `${api.dataObj.temp}K`;
      const kelvinMinTemp = `${api.dataObj.minTemp}K`;
      const kelvinMaxTemp = `${api.dataObj.maxTemp}K`;

      temp.textContent = kelvinTemp;
      document.getElementById('minTemp').textContent = kelvinMinTemp;
      document.getElementById('maxTemp').textContent = kelvinMaxTemp;
    }
  };

  return convertTemp;
})();

export default tempConverter;
