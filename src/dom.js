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
        <input class="rounded-left" type="search" name="city-name" id="">
        <button class="rounded-right">
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    `;

    nav.appendChild(appNameAnchor);
    nav.appendChild(searchBarContainer);

    return nav;
  };

  return { createNav };
})();

export default dom;
