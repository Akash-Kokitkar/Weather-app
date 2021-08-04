import React, {useState,useEffect}from 'react'
import './style.css';
import Weathercard from './weathercard';

const Temp = () => {
    const [searchvalue, setsearchvalue] = useState("mumbai")
    const [tempinfo, settempinfo] = useState({})
    
    const getweather=async()=>{
        try{
               let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=metric&appid=5a3dae928ee64f82b2754e24270d1bbc`

               let resp=await fetch(url);
               let data=await resp.json();

               const{temp,humidity,pressure}=data.main;
               
               const{main:weathermood}=data.weather[0];
               const {name}=data;
               const{speed}=data.wind;
               const{country,sunset}=data.sys;
              
            const weatherdata=
            {
            temp,
            humidity,
            pressure,
            weathermood,
            name,
            speed,
            country,
            sunset

            

            };

            

            settempinfo(weatherdata);


        }
        catch(error){
            console.log(error);
        }

    };

    useEffect(() => {
       getweather(); 
        
    },[]);
    
    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" placeholder="search" autoFocus id="search" className="searchTerm" value={searchvalue} onChange={(e)=>setsearchvalue(e.target.value)}/>
                    <button className="searchButton" type="button" onClick={()=>getweather()}> Search</button>
                </div>


            </div>

            

            <Weathercard tempinfo={tempinfo}/>


        </>
    )
}

export default Temp
