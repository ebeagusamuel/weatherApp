const tempConverter = (() => {
  const kelvinToCelcius = (kelvinTemp) => {
    const ans = (kelvinTemp - 273.515).toFixed(2);
    return `${ans}°C`;
  };

  return kelvinToCelcius;
})();

export default tempConverter;
