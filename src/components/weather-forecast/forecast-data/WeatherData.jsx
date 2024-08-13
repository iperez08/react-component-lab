import "../WeatherForecast.css"
import WeatherIcon from "./WeatherIcon"

function WeatherData(props) {
    const { day, conditions, time, img, imgAlt } = props
    return (
        <div className="weather">
            <h2>{day}</h2>
            <WeatherIcon
                img={img}
                alt={imgAlt}
            />
            <p><span>conditions: </span>{conditions}</p>
            <p><span>time: </span>{time}</p>
        </div >
    )
}

export default WeatherData