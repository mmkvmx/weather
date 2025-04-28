function Hour({temp, date, icon}){
    const formattedDate = date.split(':').slice(0, 2).join(':');
    const weatherIcons = {
        'clear-day': `${process.env.PUBLIC_URL}/img/sunny.svg`,
        cloudy: `${process.env.PUBLIC_URL}/img/cloudy.svg`,
        'partly-cloudy-day': `${process.env.PUBLIC_URL}/img/partlyCloudy.svg`,
        rain: `${process.env.PUBLIC_URL}/img/rain.svg`,
        snow: `${process.env.PUBLIC_URL}/img/snow.svg`,
        fog: `${process.env.PUBLIC_URL}/img/fog.svg`,
        'partly-cloudy-night': `${process.env.PUBLIC_URL}/img/partlyCloudy.svg`,
        wind: `${process.env.PUBLIC_URL}/img/wind.svg`,
        'clear-night': `${process.env.PUBLIC_URL}/img/clearNight.svg`
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