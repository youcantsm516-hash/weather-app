import { useEffect, useState } from "react";
import weather from "../util/weather";
import {
  MdOutlineWbSunny,
  MdUmbrella,
} from "react-icons/md";
import { BsClouds } from "react-icons/bs";

export default function Weather() {
  const [weatherData, setWeatherData] = useState<any>(null);
//   const [weatherHourlyData, setWeatherHourlyData] = useState<any>(null);

  useEffect(() => {
    async function getWeather() {
      const data = await weather();
      setWeatherData(data);
    }
    // async function getHourlyWeather() {
    //     const data = await hourlyWeather();
    //     setWeatherHourlyData(data)
    // }

    getWeather();
    // getHourlyWeather();
  }, []);

  const content = (
    <section className={`weather-block ${weatherData?.weather[0].main === 'Clear' && 'clear-bg'} ${weatherData?.weather[0].main === 'Rain' && 'rain-bg'} ${weatherData?.weather[0].main === 'Clouds' && 'clouds-bg'}`}>
      <h2>{weatherData ? weatherData.weather[0].main : "Loading..."}</h2>
      {weatherData?.weather[0].main === "Clear" ? (
        <MdOutlineWbSunny size={'3rem'} color="yellow"/>
      ) : weatherData?.weather[0].main === "Clouds" ? (
        <BsClouds className="icons"/>
      ) : weatherData?.weather[0].main === "Rain" ? (
        <MdUmbrella className="icons"/>
      ) : (
        null
      )}
      <h3>{weatherData ? 'Temperature: ' + String((weatherData.main.temp - 274.15).toFixed(2)) + '\u00B0C' : null} {weatherData ? 'Feels like ' + String((weatherData.main.feels_like - 274.15).toFixed(2)) + '\u00B0C' : null}</h3>
      <p style={{fontSize: "1.2rem"}}>{weatherData ? weatherData.weather[0].description : null}</p>
      {/* <div className="hourly-weather">
        <h2>{weatherHourlyData? JSON.stringify(weatherHourlyData) : null}</h2>
      </div> */}
    </section>
  )

  return content;
}

