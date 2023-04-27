import './CurrentWeather.css'

export default function CurrentWeather({weather}) {
    console.log(weather);
    return (
        <>
            <h2>{weather.location.name} Weather Forecast, {weather.location.region} {weather.location.country}</h2>
            <div className='current-weather'>
                <div className='weather-div'>
                    <div className='d-flex align-items-center'>
                        <img src={`https:${weather.current.condition.icon}`} width={'100px'}/>
                        <span>{weather.current.condition.text}</span>
                    </div>
                    <div className='ml-auto'>
                        <p>Wind: {weather.current.wind_mph} mph</p>
                        <p>Precip: {weather.current.precip_in} in</p>
                        <p>Pressure: {weather.current.pressure_in} in</p>
                        <p>{weather.current.temp_c}°C</p>
                    </div>
                </div>
            </div>
        </>
    )
}