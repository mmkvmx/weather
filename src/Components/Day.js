function Day({temp, date, icon}){
    // Преобразуем дату в нужный формат
    const monthNames = {
        1: "янв",
        2: "фев",
        3: "мар",
        4: "апр",
        5: "мая",
        6: "июн",
        7: "июл",
        8: "авг",
        9: "сен",
        10: "окт",
        11: "ноя",
        12: "дек"
    };
    const [year, monthIndex, day] = date.split('-'); // Разбиваем дату на части
    const month = monthNames[parseInt(monthIndex)]; // Получаем название месяца
    const formattedDate = `${day} ${month}`; // Форматируем дату
    date = formattedDate; // Обновляем значение date
    // Получаем день недели
    
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
    const weatherIconSrc = weatherIcons[icon] || '/img/unknown.png';
    return (
            <div className="day d-flex flex-row justify-center align-center ">
                <img width={60} src = {weatherIconSrc} alt={`${icon}`}/>
                {console.log(icon)}
                <p className="dayTemp">{Math.round((temp - 32) * 5 / 9)}°C</p>
                <b className="dayDate">{date}</b>
            </div>
    );
}
export default Day;