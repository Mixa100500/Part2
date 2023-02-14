const Weather = ({info, generals, showId}) => {
  const general = generals[showId];
  if (!general) return;

  const weather = general.weather;
  const url = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  const temp = (general.main.temp - 273.15).toFixed(2);
  return (
    <div>
      <h3>Weather in {info.capital[0]}</h3>
      <div>temperature {temp} Celcius</div>
      <img src={url} alt={weather[0].description} />
      <div>Wind {general.wind.speed} m/s</div>
    </div>
  )
}

export default Weather;