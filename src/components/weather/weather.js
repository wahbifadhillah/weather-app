import React from 'react';
import styles from './styles.module.scss';
import moment from 'moment';

const daycolor = hour => {
    if (hour >= 0){
        return styles.midnight;
    }
    if (hour >= 3){
        return styles.earlymorning;
    }
    if (hour >= 6){
        return styles.morning;
    }
    if (hour >= 9){
        return styles.noon;
    }
    if (hour >= 12){
        return styles.afternoon;
    }
    if (hour >= 15){
        return styles.evening;
    }
    if (hour >= 18){
        return styles.night;
    }
    if (hour >= 21){
        return styles.latenight;
    }
}

const refresh = () => {
    window.location.reload();
  }

const WeatherCard = ({weatherData}) => {
    const iconcode = weatherData.weather[0].icon;
    const iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@4x.png";
    const hour = moment().hour();
    return(
        <div className={`${styles.wrapper} ${daycolor(hour)}`}>
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
                <div className={styles.refresh}>
                    <button className={styles.refreshBtn} onClick={refresh}>Refresh</button>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;