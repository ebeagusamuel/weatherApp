import './assets/style.scss';
import './assets/bg-img.jpg';
import './assets/bgCloudy.jpg';
import './assets/bgFoggy.jpg';
import './assets/bgRain.jpg';
import './assets/bgSnowy.jpg';
import './assets/bgStorm.jpg';
import './assets/bgSunny.jpg';
import './assets/bgClearsky.jpg';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import dom from './dom';
import api from './weatherAPI';
import tempConverter from './tempConverter';

document.body.appendChild(dom.createNav());
document.body.appendChild(dom.createMainContentContainer());
document.body.appendChild(dom.createFooter());

const mainContentDiv = document.querySelector('.main-content');
mainContentDiv.appendChild(dom.displayInstructionText());

function clearMainContentDiv() {
  while (mainContentDiv.lastChild) {
    mainContentDiv.lastChild.remove();
  }
}

const searchButton = document.querySelector('.searchButton');
searchButton.addEventListener('click', async () => {
  const cityName = document.getElementById('city-name').value;
  await api.fetchWeatherData(cityName);
  const fetchedData = api.dataObj;

  if (fetchedData.cod === 200) {
    clearMainContentDiv();
    mainContentDiv.appendChild(dom.displayWeatherInfo(fetchedData));

    const convertTempButton = document.querySelector('.convertTemp');
    convertTempButton.addEventListener('click', () => {
      tempConverter(convertTempButton);
    });
  }

  if (fetchedData.cod === '404') {
    clearMainContentDiv();
    mainContentDiv.appendChild(dom.displayErrorText());
  }
});
