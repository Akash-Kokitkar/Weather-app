import React from 'react'

const Weathercard = ({ tempinfo}) => {
    
     const {temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset}=tempinfo;

        const [weather,setweather]=React.useState(weathermood)

        React.useEffect(() => {
           if(weathermood)
           {
               switch(weathermood){
               case "Clouds":
                   setweather("wi-day-cloudy")
                   break;
                case "Cloud":
                    setweather("wi-day-cloudy")
                    break;   
                case "Haze":
                    setweather("wi-fog")
                    break;
                case "Clear":
                        setweather("wi-day-sunny")
                        break;
                        
                case "Mist":
                        setweather("wi-dust")
                        break;          
                default:
                    setweather("wi-day-sunny")
                    break;


               }

           }
        })

        let sec=sunset;
        let date=new Date(sec*1000);
        let timestr=`${date.getHours()}:${date.getMinutes()}`
    
    return (
        <>
            <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weather}`} />
                </div>

                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>

                    <div className="description">
                        <div className="weatherCondition">
                            {weathermood}<br/>
                            {country}
                        </div>
                        <div className="place">
                            {name}
                        </div>

                    </div>

                </div>

                <div className="date">{new Date().toLocaleString()}</div>


                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"} />
                            </p>
                            <p classname="extra-info-leftside">
                               {timestr}
                               <br /> sunset
                            </p>
                        </div>


                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"} />
                            </p>
                            <p classname="extra-info-leftside">
                                {humidity} <br /> humidity

                            </p>
                        </div>

                    </div>

                    <div>
                        <div>
                            <div className="weather-extra-info">
                                <div className="two-sided-section">
                                    <p>
                                        <i className={"wi wi-rain"} />
                                    </p>
                                    <p classname="extra-info-leftside">
                                        {pressure} <br /> pressure

                                    </p>
                                </div>
                                <div className="two-sided-section">
                                    <p>
                                        <i className={"wi wi-strong-wind"} />
                                    </p>
                                    <p classname="extra-info-leftside">
                                        {speed} <br /> speed

                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>









                </div>

            </article>


        </>
    )
}

export default Weathercard;
