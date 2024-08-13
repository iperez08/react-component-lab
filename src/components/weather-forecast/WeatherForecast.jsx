import "./WeatherForecast.css"
import WeatherData from "./forecast-data/WeatherData"

function WeatherForecast(props) {
    const { day, img, imgAlt, conditions, time } = props
    return (
        <WeatherData
            day={day}
            img={img}
            imgAlt={imgAlt}
            conditions={conditions}
            time={time}
        />
    )
}

export default WeatherForecast