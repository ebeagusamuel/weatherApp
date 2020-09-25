import './assets/style.scss';
import './assets/bg-img.jpg'
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import dom from './dom'
import api from './weatherAPI'

document.body.appendChild(dom.createNav())
document.body.appendChild(dom.createMainContentContainer())
document.body.appendChild(dom.createFooter())

function clearMainContentDiv(){
  while(mainContentDiv.lastChild){
    mainContentDiv.lastChild.remove();
  }
}

const mainContentDiv = document.querySelector('.main-content');
mainContentDiv.appendChild(dom.displayInstructionText())

const searchButton = document.querySelector('.searchButton')
searchButton.addEventListener('click', async () => {
  const cityName = document.getElementById('city-name').value;
  await api.fetchWeatherData(cityName);
  const fetchedData = api.dataObj;
  
  if(fetchedData['cod'] === 200){
    clearMainContentDiv()
    mainContentDiv.appendChild(dom.displayWeatherInfo(fetchedData))
  }

  if(fetchedData['cod'] === '404'){
    clearMainContentDiv()
    mainContentDiv.appendChild(dom.displayErrorText())
  }

})