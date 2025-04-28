import './index.scss'
import React from 'react';
import Date from './Components/Date';
import WeatherDay from './Components/WeatherDay';
import Day from './Components/Day';
import Hour from './Components/Hour';
import axios from 'axios';
function App() {
  const [weather, setWeather] = React.useState(null);
  const [dayData, setDayData] = React.useState();
  const [curData, setCurData] = React.useState();
  const [hourData, setHourData] = React.useState();
  const weekdays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  React.useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Saint-Petersburg?unitGroup=us&key=VZRVSE8BSD68DMP7JHKLUAUMS&contentType=json');
        console.log(response.data);
        const daysForecat = response.data.days.slice(0, 5).map(day => ({
          temp: day.temp,
          snow: day.snow,
          icon: day.icon,
          cloudcover: day.cloudcover,
          date: day.datetime
      }));
        setDayData(daysForecat);
        const currentWeather = {
          temp: response.data.currentConditions.temp,
          feelslike: response.data.currentConditions.feelslike,
          humidity: response.data.currentConditions.humidity,
          snow: response.data.currentConditions.snow,
          cloudcover: response.data.currentConditions.cloudcover,
          wind: response.data.currentConditions.windspeed,
          pressure: response.data.currentConditions.pressure,
          uv: response.data.currentConditions.uvindex,
          icon: response.data.currentConditions.icon,
          sunrise: response.data.currentConditions.sunrise,
          sunset: response.data.currentConditions.sunset
        };
        setCurData(currentWeather);
        const hourForecart = response.data.days[0].hours
          .filter(hour => ['12:00:00', '15:00:00', '18:00:00', '21:00:00', '23:00:00'].includes(hour.datetime)) // Оставляем только нужные часы
          .map(hour => ({
            temp: hour.temp,
            snow: hour.snow,
            icon: hour.icon,
            cloudcover: hour.cloudcover,
            date: hour.datetime
          }));
        setHourData(hourForecart);
      }
      catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    console.log(curData);
    fetchWeatherData();

    const interval = setInterval(() => {
      fetchWeatherData();
    }, 1 * 60 * 60 * 1000); // Обновление данных каждый час

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="App">
      <div className='title d-flex flex-row justify-center'>
      <img height={120}className='Logo' src = '/img/citytel.png' alt = 'Гостиница Октябрьская'/>
      <h1 className='mainTitle'>Погода в Санкт-Петербурге</h1>
      </div>
      <div className='weather d-flex justify-center flex-column'> 
        <div className='today d-flex flex-row justify-center'>
          <Date/>
          
          {curData && 
            <WeatherDay 
              temp = {curData.temp} 
              feelslike = {curData.feelslike} 
              humidity = {curData.humidity} 
              snow = {curData.snow} 
              cloudcover = {curData.cloudcover} 
              wind = {curData.wind} 
              pressure = {curData.pressure}
              uv = {curData.uv}
              icon = {curData.icon}
              sunrise = {curData.sunrise}
              sunset = {curData.sunset}
            />
          }
        </div>
        <div className='forecast d-flex flex-row justify-center'>
          <div className='days_forecast'>
            <h1 className='dayTitle'>Прогноз на 5 дней</h1>
            {dayData && dayData.map((day, index) => (
              <Day 
              key = {index}
              temp = {day.temp}
              snow = {day.snow}
              cloudcover = {day.cloudcover}
              icon = {day.icon}
              date = {day.date}
              />
              ))}
          </div>
          <div className='hourly_forecast '>
          <h1 className='dayTitle mb-20'>Прогноз по часам</h1>
            <div className='Hours d-flex flex-row justify-center'>
              {hourData && hourData.map((hour, index) => (
                <Hour 
                key = {index}
                temp = {hour.temp}
                snow = {hour.snow}
                cloudcover = {hour.cloudcover}
                date = {hour.date}
                icon = {hour.icon}
                />
              ))}
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
