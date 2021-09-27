import React from 'react';
import styles from './styles.module.scss';
import moment from 'moment';


const WeatherCard = ({weatherData}) => {
    const iconcode = weatherData.weather[0].icon;
    const iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@4x.png";
    const hour = moment().hour();
    let daystat = 'day';
        if (hour >= 6){
            daystat = 'day';
        }
        if (hour > 11){
            daystat = 'night';
        }
        if (hour < 6){
            daystat = 'night';
        }
    return(
        <div className={`${styles.wrapper} ${daystat == 'day' ? styles.day:styles.night}`}>
            <div className={styles.card}>    
                <div className={styles.city}>
                    {weatherData.name}
                </div>
                <div className={styles.dawndusk}>
                    <div className={styles.sunrise}>Sunrise: {moment(weatherData.sys.sunrise*1000).format('LT')}</div>
                    <div className={styles.sunset}>Sunset: {moment(weatherData.sys.sunset*1000).format('LT')}</div>
                </div>
                <div className={styles.weather}><img className={styles.weathericon} src={iconurl} alt="Weather icon"/></div>
                <div className={styles.temp}>
                    {weatherData.main.temp} &deg;C
                </div>
                <div className={styles.weathername}>
                    {weatherData.weather[0].main}
                </div>
                <div className={styles.dayData}>
                    <div className={styles.day}>{moment().format('ddd')}</div>|
                    <div className={styles.date}>{moment().format('MMM D')}</div>|
                    <div className={styles.time}>{moment().format('LT')}</div>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;