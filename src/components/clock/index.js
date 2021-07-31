import { useEffect, useState } from "react"
import styles from './index.less'

const getCNDate = () => {
    let wholeDate = new Date()
    let month = wholeDate.getMonth()
    let date = wholeDate.getDate()    
    let day = wholeDate.getDay()
    let arr = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
    
    let cn_date = month + "月" + date + "日"
    let cn_day = arr[day]
    return [cn_date, cn_day]
}

const getTime = () => {
    let wholeDate = new Date()
    let hour = wholeDate.getHours()
    let minute = wholeDate.getMinutes()
    let second = wholeDate.getSeconds()
    if(minute<10){
        minute="0"+minute
    }
    return [hour,minute,second]
}
const updateClock = (hour,minute,second) => {
    hour = hour % 12;
    let hourDiv = document.querySelector("#clock_hourP")
    let minuteDiv = document.querySelector("#clock_minuteP")
    let secondDiv = document.querySelector("#clock_secondP")
    secondDiv.style.transform = "rotate(" + (180+second*6) + "deg)"
    minuteDiv.style.transform = "rotate(" + (180+minute*6) + "deg)"
    hourDiv.style.transform = "rotate(" + (180+(hour*30+minute*0.5)) + "deg)"
}

export default function() {
    let [cn_date,cn_day] = getCNDate()
    let [hour, setHour] = useState(0)
    let [minute,setMinute] = useState(0)

    useEffect(()=>{
        let [hour, minute, second] = getTime()
        setHour(hour)
        setMinute(minute)
        let interval = setInterval(() => {
            let [hour, minute, second] = getTime()
            setHour(hour)
            setMinute(minute)
            updateClock(hour,minute,second);
        }, 1000)
        return () => clearInterval(interval);

    },[hour,minute])

    return (
        <div className={styles.clock}>
            <div className={styles.clock_real}>
                <div className={styles.clock_real_hourP} id='clock_hourP'></div>
                <div className={styles.clock_real_minuteP} id='clock_minuteP'></div>
                <div className={styles.clock_real_secondP} id='clock_secondP'></div>
            </div>
            <div className={styles.clock_time}><span>{hour}</span>:<span>{minute}</span></div>
            <div className={styles.clock_date}><div>{cn_date}</div><div>{cn_day}</div></div>
        </div>
    )
}