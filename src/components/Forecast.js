import './Forecast.css';
import Moment from 'react-moment';
import 'moment-timezone';

export default function Forecast({weather}) {
    return (
        <>
            <div className="forecast mt-2" id='forecast'>
                <h2>2 Week Extended Forecast in Lagos, Lagos, Nigeria</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Temperature</th>
                            <th>Weather</th>
                            <th>Wind</th>
                            <th>Humidity</th>
                            <th>Precipitation</th>
                            <th>Sunrise</th>
                            <th>Sunset</th>
                        </tr>
                    </thead>
                    <tbody>
                        {weather.forecast.forecastday.map ( (forecast, i) => (
                            <tr key={i}>
                                <td>
                                    <Moment format='MMM DD'>
                                        {forecast.date}
                                    </Moment>
                                </td>
                                <td>
                                    <div className='d-flex align-items-center'>
                                        <img src={`https:${forecast.day.condition.icon}`} width={'50px'} className='mr-2'/>
                                        <span>{forecast.day.mintemp_c}°C / {forecast.day.maxtemp_c}°C</span>
                                    </div>
                                </td>
                                <td>
                                    <span>{forecast.day.condition.text}</span>
                                </td>
                                <td>{forecast.day.maxwind_kph}km/h</td>
                                <td>{forecast.day.avghumidity}%</td>
                                <td>{forecast.day.totalprecip_in}in</td>
                                <td>{forecast.astro.sunrise}</td>
                                <td>{forecast.astro.sunset}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}