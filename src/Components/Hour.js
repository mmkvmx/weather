function Hour({temp, date, icon}){
    const formattedDate = date.split(':').slice(0, 2).join(':');
    const weatherIcons = {
        'clear-day': '/img/sunny.svg',
        cloudy: '/img/cloudy.svg',
        'partly-cloudy-day': '/img/partlyCloudy.svg',
        rain: '/img/rain.svg',
        snow: '/img/snow.svg',
        fog: '/img/fog.svg',
        'partly-cloudy-night': '/img/partlyCloudy.svg',
        wind: '/img/wind.svg',
        'clear-night': '/img/clearNight.svg'
        // Добавьте другие значения по необходимости
    };
    const hours = parseInt(date.split(':')[0], 10);
    const time = (hours > 20 || hours < 6) ? "night" : "Day"; // Проверяем время
    const weatherIconSrc = weatherIcons[icon] || '/img/unknown.png';
    return(
        <div className={`hour ${time}`}>
            <h2 className="mt-50">{formattedDate}</h2>
            <img width={60} height={60} src={weatherIconSrc} alt="Погода"/>
            <b>{Math.round((temp - 32) * 5 / 9)}°C</b>
        </div>
    )
}
export default Hour; 