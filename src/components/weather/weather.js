import React from 'react';
import styles from './styles.module.scss';
import moment from 'moment';

import clearskyd from './svg/01d.svg';
import clearskyn from './svg/01n.svg';
import fewcloudsd from './svg/02d.svg';
import fewcloudsn from './svg/02n.svg';
import scatteredcloudsd from './svg/03d.svg';
import scatteredcloudsn from './svg/03n.svg';
import brokencloudsd from './svg/04d.svg';
import brokencloudsn from './svg/04n.svg';
import showerraind from './svg/09d.svg';
import showerrainn from './svg/09n.svg';
import raind from './svg/10d.svg';
import rainn from './svg/10n.svg';
import thunderstormd from './svg/11d.svg';
import thunderstormn from './svg/11n.svg';
import snowd from './svg/13d.svg';
import snown from './svg/13n.svg';
import mistd from './svg/50d.svg';
import mistn from './svg/50n.svg';
// import { ReactComponent as ClearSky } from './svg/01n.svg';
// import Weathericon from '../weathericon/weathericon';

const daycolor = hour => {
    if (hour >= 21){
        return styles.latenight;
    }
    if (hour >= 18){
        return styles.night;
    }
    if (hour >= 15){
        return styles.evening;
    }
    if (hour >= 12){
        return styles.afternoon;
    }
    if (hour >= 9){
        return styles.noon;
    }
    if (hour >= 6){
        return styles.morning;
    }
    if (hour >= 3){
        return styles.earlymorning;
    }
    if (hour >= 0){
        return styles.midnight;
    }
}

const iconpicker = icon => {
    switch(icon){
        case '01d':return styles.clearskyd;break;
        case '01n':return styles.clearskyn;break;
        case '02d':return styles.fewcloudsd;break;
        case '02n':return styles.fewcloudsn;break;
        case '03d':return styles.scatteredcloudsd;break;
        case '03n':return styles.scatteredcloudsn;break;
        case '04d':return styles.brokencloudsd;break;
        case '04n':return styles.brokencloudsn;break;
        case '09d':return styles.showerraind;break;
        case '09n':return styles.showerrainn;break;
        case '10d':return styles.raind;break;
        case '10n':return styles.rainn;break;
        case '11d':return styles.thunderstormd;break;
        case '11n':return styles.thunderstormn;break;
        case '13d':return styles.snowd;break;
        case '13n':return styles.snown;break;
        case '50d':return styles.mistd;break;
        case '50n':return styles.mistn;break;
        default:console.log('icon not found', icon);
    }
}

const refresh = () => {
    window.location.reload();
  }

const WeatherCard = ({weatherData}) => {
    const iconcode = weatherData.weather[0].icon;
    const iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@4x.png";
    const hour = moment().hour();
    console.log(daycolor(hour));
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
                <div className={`${styles.weather} ${iconpicker(iconcode)}`}>
                    {/* <div className={iconpicker(iconcode)}></div> */}
                    {/* <img className={styles.weathericon} src={iconpicker(iconcode)} alt="Weather icon"/> */}
                    {/* <ClearSky fill='red'/> */}
                </div>
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