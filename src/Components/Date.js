import styles from './Date.module.scss';
import React from 'react';

function DateTime() {
    const [date, setDate] = React.useState(new Date());
    const [time, setTime] = React.useState(date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    const [day, setDay] = React.useState(date.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));

    // Дни недели на русском
    const weekdays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    React.useEffect(() => {
        const interval = setInterval(() => {
            const newDate = new Date();
            setDate(newDate);
            setTime(newDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
            setDay(newDate.toLocaleDateString('ru-RU', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

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

    const hours = date.getHours().toString().padStart(2, '0'); // Добавляем ведущий 0 для часов
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Добавляем ведущий 0 для минут
    const dayOfWeek = weekdays[date.getDay()]; // Используем массив для дня недели
    const Day = date.getDate();
    const month = monthNames[date.getMonth() + 1]; // Месяцы начинаются с 0

    return (
        <div className={styles.Date}>
            <h3>Санкт-Петербург</h3>
            <h1>{hours}:{minutes}</h1>
            <h4>{dayOfWeek}, {Day} {month}</h4>
        </div>
    );
}

export default DateTime;
