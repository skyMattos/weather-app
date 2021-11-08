import 'weather-icons/css/weather-icons.css';
import './WheaterComponent.css'

export default function WheaterComponent ({main,name,rain,sys,weather,sunset}) {
    const date = Date.now();
    console.log(date, sunset)
    function iconSwitch () {
        switch (weather[0].icon) {
            case '01n':
                return <i className='wi wi-night-clear'></i>;
            case '02d':
                return <i className='wi wi-day-cloudy'></i>;
            case '01d':
                return <i className='wi wi-day-sunny'></i>;
            case '02n':
                return <i className='wi wi-night-partly-cloudy'></i>;
            case '04n':
                return <i className='wi wi-night-alt-cloudy'></i>;
            case '03n':
                return <i className='wi wi-night-partly-cloudy'></i>;
            case '50n':
                return <i className='wi wi-night-fog'></i>;
            case '04d':
                return <i className='wi wi-cloudy'></i>;
            case '03d':
                return <i className='wi wi-day-sunny-overcast'></i>
            default:

                break;
        }
    }

    console.log(main,name,rain,sys,weather[0],)
    return(
         <div className='container'>
            <div className='city-name'>
                <h2>{name} </h2>
                <sup>{sys.country}</sup>
            </div>
                <div className='city-temp'>
                    {Math.round(main.temp)}°C
                </div>
                <div className='city-icon'>
                    {iconSwitch(weather[0].main)}
                </div>
                <div className='city-weather'>
                    <h4>{weather[0].main} {weather[0].description}</h4>
                </div>
         </div>
    )
}