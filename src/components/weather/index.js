import styles from './index.less'
import { useEffect, useState } from 'react'
import { getWeatherNow, getThreeDaysWeather } from './fetcher'

const WeatherCard = () => {

    const [weatherInfo,setWeatherInfo] = useState("");
    const [newInfo,setNewInfo] = useState("");
    const [cityInfo, setCityInfo] = useState({name:"北京",id:"101010100"});
    const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{        
        getWeatherNow(cityInfo.id).then((res) => {setWeatherInfo(res)});
        getThreeDaysWeather(cityInfo.id).then((res) => {setNewInfo(res);setIsLoading(false)});
        const listener = setInterval(() => {
                getWeatherNow(cityInfo.id).then((res) => {setWeatherInfo(res)});
                getThreeDaysWeather(cityInfo.id).then((res) => {setNewInfo(res);setIsLoading(false)});
            }, 60000);
        return () => {
            clearInterval(listener)
        }
    },[])

    return(
        <div className={styles.weatherCard}>
            <div className={styles.weatherCard_body}>
                <div>
                    <span>{weatherInfo.temp}℃</span>
                    <span>{weatherInfo.text}</span>
                </div>
                <div>{cityInfo.name}</div>
            </div>
            <div className={styles.weatherCard_footer}>
                <div className={styles.weatherCard_footer_left}>
                    <div>{weatherInfo.windDir}{weatherInfo.windScale}级</div>
                    <div>湿度{weatherInfo.humidity}</div>
                </div>
                <div className={styles.weatherCard_footer_right}>
                    <div>
                        <div>今天</div>
                        {isLoading?null:
                            <div>
                                <span>{newInfo[0].tempMin}~</span>
                                <span>{newInfo[0].tempMax}℃</span>
                                <span>{newInfo[0].textDay}</span>
                            </div>
                        }
                    </div>
                    <div>
                        <div>明天</div>
                        {isLoading?null:
                            <div>
                                <span>{newInfo[1].tempMin}~</span>
                                <span>{newInfo[1].tempMax}℃</span>
                                <span>{newInfo[1].textDay}</span>
                            </div>
                        }
                    </div>
                    <div>
                    <   div>后天</div>
                        {isLoading?null:
                            <div>
                                <span>{newInfo[2].tempMin}~</span>
                                <span>{newInfo[2].tempMax}℃</span>
                                <span>{newInfo[2].textDay}</span>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard