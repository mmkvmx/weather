import styles from './WeatherDay.module.scss';
function WeatherDay({temp, feelslike, humidity, snow, cloudcover, wind, pressure, uv, icon, sunrise, sunset}) {// Преобразование из Фаренгейта в Цельсий
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
    const weatherIconSrc = weatherIcons[icon] || '/img/unknown.png';
    const weatherTitle = {
        'clear-day': 'Солнечно',
        cloudy: 'Облачно',
        'partly-cloudy-day': 'Переменная облачность',
        rain: 'Дождь',
        snow: 'Снег',
        fog: 'Туман',
        'partly-cloudy-night': 'Переменная облачность',
        wind: 'Ветер',
        'clear-night': 'Ясно'
        // Добавьте другие значения по необходимости
    }
    const weatherTitleSrc = weatherTitle[icon] || 'Неизвестно';
    return (
        <div className={styles.weatherDay}>
            <div className={styles.temp}>
                <h1>{Math.round((temp - 32) * 5 / 9)}°C</h1>
                <h4 className='ml-15'>Ощущается как {Math.round((feelslike - 32) * 5 / 9)}°C</h4>
                <div className='mt-30'>
                    <div className='d-flex flex-row'>
                        <img width={48} height={48} src={`/img/sunrise.png`} alt="Восход" />
                        <div className='d-flex flex-column justify-center ml-15'>
                            <b>Восход</b>
                            <p>{sunrise.split(':').slice(0, 2).join(':')}</p>
                        </div>
                    </div>
                    <div className='d-flex flex-row mt-15'>
                        <img width={48} height={48} src={`/img/sunset.png`} alt="Закат" />
                        <div className='d-flex flex-column justify-center ml-15'>
                            <b>Закат</b>
                            <p>{sunset.split(':').slice(0, 2).join(':')}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={styles.centerBlock}>
                <img height={200} width={200} src={weatherIconSrc} alt="Погода" />
                {console.log(icon)}
                <h3 className='mt-30'>{weatherTitleSrc}</h3>
            </div>
            <div className={styles.table}>
                <div className={styles.row}>
                    <div className={styles.cell}>
                        <img src={`img/humidity.png`} alt="Влажность" />
                        <p className={styles.value}>{humidity}%</p>
                        <b>Влажность</b>
                    </div>
                    <div className={styles.cell}>
                        <img height={50} src={`img/wind.png`} alt="Ветер" />
                        <p>{wind} м/с</p>
                        <b>Ветер</b>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.cell}>
                        <img src={`img/pressure.png`} alt="Давление" />
                        <p>{Math.round(pressure / 1.333)} мм рт.ст</p>
                        <b>Давление</b>
                    </div>
                    <div className={styles.cell}>
                        <img src={`img/uv.png`} alt="УФ индекс" />
                        <p>{uv}</p>
                        <b>УФ</b>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default WeatherDay;