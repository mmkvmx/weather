function Day({temp, date}){
    // Преобразуем дату в нужный формат
    const monthNames = {
        1: "января",
        2: "февраля",
        3: "марта",
        4: "апреля",
        5: "мая",
        6: "июня",
        7: "июля",
        8: "августа",
        9: "сентября",
        10: "октября",
        11: "ноября",
        12: "декабря"
    };
    const [year, monthIndex, day] = date.split('-'); // Разбиваем дату на части
    const month = monthNames[parseInt(monthIndex)]; // Получаем название месяца
    const formattedDate = `${day} ${month}`; // Форматируем дату
    date = formattedDate; // Обновляем значение date
    return (
        <div className="day d-flex flex-row justify-center align-center">
            <img width={60} src = "/img/sunny-cloudy.png"/>
            <p className="dayTemp">{Math.round((temp - 32) * 5 / 9)}°C</p>
            <b className="dayDate">{date}</b>
        </div>
    );
}
export default Day;