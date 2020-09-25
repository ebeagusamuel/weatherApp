const dom = (() => {
  const createNav = () => {
    const nav = document.createElement("nav");
    nav.classList.add(
      "nav-container",
      "d-flex",
      "flex-column",
      "justify-content-between",
      "flex-md-row",
      "py-3",
      "px-3"
    );

    const appNameAnchor = document.createElement("a");
    appNameAnchor.classList.add("text-decoration-none");
    appNameAnchor.textContent = "weatherApp";
    appNameAnchor.href = "#";

    const searchBarContainer = document.createElement("div");
    searchBarContainer.classList.add(
      "d-flex",
      "align-content-center",
      "search-bar-container"
    );

    searchBarContainer.innerHTML = `
      <label class="mb-0 pt-1 mr-1" for="city-name">Search City:</label>
      <div class=" d-flex">
        <input class="rounded-left" type="search" name="city-name" id="city-name">
        <button class="searchButton rounded-right">
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    `;

    nav.appendChild(appNameAnchor);
    nav.appendChild(searchBarContainer);

    return nav;
  };

  const createMainContentContainer = () => {
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("main-content");

    return mainContainer;
  };

  const createFooter = () => {
    const footerContainer = document.createElement("footer");
    footerContainer.classList.add("py-2");

    const footerLinksContainer = document.createElement("div");
    footerLinksContainer.classList.add(
      "w-25",
      "d-flex",
      "justify-content-between",
      "mx-auto"
    );
    footerLinksContainer.innerHTML = `
      <a href="https://github.com/ebeagusamuel", target="blank"><i class="fab fa-github"></i></a>
      <a href="https://linkedin.com/in/ebeagusamuel", target="blank"><i class="fab fa-linkedin"></i></a>
      <a href="https://twitter.com/ebeagu_samuel", target="blank"><i class="fab fa-twitter"></i></a>
    `;

    footerContainer.appendChild(footerLinksContainer);

    return footerContainer;
  };

  const displayInstructionText = () => {
    const div = document.createElement("div");
    div.classList.add(
      "w-75",
      "mx-auto",
      "my-5",
      "p-5",
      "bg-secondary",
      "rounded"
    );
    div.innerHTML = `
      <p class="text-center h4 text-light">
       Enter a city name in the search bar to see the weather condition in that city.
      </p>
    `;

    return div;
  };

  const displayErrorText = () => {
    const div = document.createElement("div");
    div.classList.add(
      "w-75",
      "mx-auto",
      "my-5",
      "p-5",
      "bg-secondary",
      "rounded"
    );
    div.innerHTML = `
      <p class="text-center h4 text-light">
       Oops, city not found. Please ensure that you've spelt the name of the city correctly.
      </p>
    `;

    return div;
  };

  const displayWeatherInfo = (dataObj) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="city-weather-info-div">
      <div class="city-name  ml-3">
        <h2 class="mb-1">${dataObj.name}, ${dataObj.country}<i class="fas fa-map-marker-alt ml-2"></i></h2>
      </div>
      <div class="temp-div ml-4">
        <h2 data-temp="kelvin" id="temp" class="mb-1">${dataObj.temp}K</h2>
      </div>
      <div class="cloud-status-div ml-3">
        <h2>${dataObj.weather}</h2>
      </div>
      <button class="convertTemp ml-3">Convert To °C</button>
    </div>

    <div class="more-info-div row text-center mt-5 mx-auto">
      <div class="col-4">
        <p class='property'>Min temp</p>
        <p id="minTemp" class="value">${dataObj.minTemp}K</p>
      </div>
      <div class="col-4">
        <p class='property'>Max temp</p>
        <p id="maxTemp" class="value">${dataObj.maxTemp}K</p>
      </div>
      <div class="col-4">
        <p class='property'>Humdity</p>
        <p class="value">${dataObj.humidity}%</p>
      </div>
      <div class="col-4">
        <p class='property'>Wind speed</p>
        <p class="value">${dataObj.windSpeed}m/s</p>
      </div>
      <div class="col-4">
        <p class='property'>Pressure</p>
        <p class="value">${dataObj.pressure}hPa</p>
      </div>
      <div class="col-4">
        <p class='property'>Weather</p>
        <p class="value">${dataObj.weather}</p>
      </div>
    </div>
    `;

    return div;
  };

  return {
    createNav,
    createMainContentContainer,
    createFooter,
    displayInstructionText,
    displayErrorText,
    displayWeatherInfo,
  };
})();

export default dom;
