import "./assets/style.scss";
import "./assets/bg-img.jpg";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import dom from "./dom";
import api from "./weatherAPI";
import tempConverter from "./tempConverter";

document.body.appendChild(dom.createNav());
document.body.appendChild(dom.createMainContentContainer());
document.body.appendChild(dom.createFooter());

const mainContentDiv = document.querySelector(".main-content");
mainContentDiv.appendChild(dom.displayInstructionText());

function clearMainContentDiv() {
  while (mainContentDiv.lastChild) {
    mainContentDiv.lastChild.remove();
  }
}

function convertTemp(element) {
  const temp = document.getElementById("temp");

  if (temp.getAttribute("data-temp") === "kelvin") {
    temp.setAttribute("data-temp", "celcius");
    element.textContent = "Convert to K";

    const kelvinTemp = api.dataObj.temp;
    const kelvinMinTemp = api.dataObj.minTemp;
    const kelvinMaxTemp = api.dataObj.maxTemp;

    const celciusTemp = tempConverter(kelvinTemp);
    const celciusMinTemp = tempConverter(kelvinMinTemp);
    const celciusMaxTemp = tempConverter(kelvinMaxTemp);

    temp.textContent = celciusTemp;
    document.getElementById("minTemp").textContent = celciusMinTemp;
    document.getElementById("maxTemp").textContent = celciusMaxTemp;
  } else {
    temp.setAttribute("data-temp", "kelvin");
    element.textContent = "Convert to °C";

    const kelvinTemp = `${api.dataObj.temp}K`;
    const kelvinMinTemp = `${api.dataObj.minTemp}K`;
    const kelvinMaxTemp = `${api.dataObj.maxTemp}K`;

    temp.textContent = kelvinTemp;
    document.getElementById("minTemp").textContent = kelvinMinTemp;
    document.getElementById("maxTemp").textContent = kelvinMaxTemp;
  }
}

const searchButton = document.querySelector(".searchButton");
searchButton.addEventListener("click", async () => {
  const cityName = document.getElementById("city-name").value;
  await api.fetchWeatherData(cityName);
  const fetchedData = api.dataObj;

  if (fetchedData.cod === 200) {
    clearMainContentDiv();
    mainContentDiv.appendChild(dom.displayWeatherInfo(fetchedData));

    const convertTempButton = document.querySelector(".convertTemp");
    convertTempButton.addEventListener("click", () => {
      convertTemp(convertTempButton);
    });
  }

  if (fetchedData.cod === "404") {
    clearMainContentDiv();
    mainContentDiv.appendChild(dom.displayErrorText());
  }
});
