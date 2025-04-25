import styles from './WeatherDay.module.scss';
function WeatherDay(){
    return (
        <div className={styles.weatherDay}>
            <div className={styles.temp}>
                    <h1>20°C</h1>
                    <h4 className='ml-15 '>Ощущается как 18°C</h4>
            </div>
            <div className={styles.centerBlock}>
                <img height={200} width={200} src="/img/sunny.svg" alt="Солнце" />
                <b className='mt-30'>Ясно</b>
            </div>
            <div className={styles.table}>
                <div className={styles.row}>
                    <div className={styles.cell}>
                        <img src='img/humidity.png' alt="Влажность" />
                        <p className={styles.value}>60%</p>
                        <b>Влажность</b>
                    </div>
                    <div className={styles.cell}>
                        <img height={50} src='img/wind.png' alt="Ветер" />
                        <p>5 м/с</p>
                        <b>Ветер</b>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.cell}>
                        <img src='img/pressure.png' alt="Давление" />
                        <p>750 мм рт. ст.</p>
                        <b>Давление</b>
                    </div>
                    <div className={styles.cell}>
                        <img src='img/uv.png' alt="Видимость" />
                        <p>10 км</p>
                        <b>Видимость</b>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WeatherDay;