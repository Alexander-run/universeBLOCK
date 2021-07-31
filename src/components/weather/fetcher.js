import axios from "axios";

const weather_URL = 'https://devapi.qweather.com/v7';
const weatherKey = 'c6da9543ec3745baa07de850add181a3';

export const weather_axiosIns = axios.create({
    baseURL:weather_URL
})

export const getWeatherNow = (cityCode) => {
    return weather_axiosIns
    .get(`/weather/now`,{
        params:{
            key : weatherKey,
            location : cityCode
        }
    })
    .then((res) => {
        let { temp, text, windDir, windScale, humidity } = res.data.now
        return { temp, text, windDir, windScale, humidity } 
    })
}

export const getThreeDaysWeather = (cityCode) => {
    return weather_axiosIns
    .get(`/weather/3d`,{
        params: {
            key : weatherKey,
            location : cityCode
        }
    })
    .then((res) => {
        return res.data.daily
    })
}