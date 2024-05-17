import { IoSearchOutline } from "react-icons/io5";
import { WiHumidity } from "react-icons/wi";
import { LuWind } from "react-icons/lu";
import { useState } from "react";
import axios from 'axios';
import WeatherIcon from '../assets/weather-icon.png';


const WeatherForm = () => {
    const [data, setData] = useState({
        celcius: 10,
        name: 'London',
        description: 'Cloudy',
        humidity: 10,
        speed: 2
    });
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleClick = () => {
        if (name !== "") {
            setLoading(true);
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=a4bb378261573defd986d3324a9f2f33&units=metric`;
            axios.get(apiUrl)
                .then(res => {
                    setData({
                        celcius: res.data.main.temp,
                        name: res.data.name,
                        description: res.data.weather[0].description,
                        humidity: res.data.main.humidity,
                        speed: res.data.wind.speed
                    });
                })
                .catch(err => {
                    setError('Failed to fetch weather data. Please try again later.');
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center gap-3 relative p-2 rounded-3xl ">
                <input
                    type="text"
                    placeholder="Enter City Name"
                    onChange={(e) => setName(e.target.value)}
                    className="p-2 rounded-3xl w-full md:w-[720px]"
                />
                <button className="rounded-full w-10 h-10 bg-white">
                    <IoSearchOutline className="text-black relative top-[1px] left-[10px] " onClick={handleClick} alt="" size={20} />
                </button>
            </div>
            {loading ? (
                <div className="text-white">Loading...</div>
            ) : error ? (
                <div className="text-red-800">Error: {error}</div>
            ) : (
                <div className="flex flex-col items-center relative top-5 gap-4 text-white">
                    <img src={WeatherIcon} alt="" className=" relative  w-28 h-24 " />
                    <h1 className="text-4xl">{Math.round(data.celcius)}°C</h1>
                    <h2 className="font-sans font-bold text-xl">{data.name}</h2>
                    <p className="text-lg">{data.description}</p>
                    <div className="flex items-center justify-between gap-8 text-lg">
                        <div className="flex gap-1">
                            <WiHumidity className="relative top-1" size={50} />
                            <div className="flex flex-col gap-2">
                                <p>{Math.round(data.humidity)}%</p>
                                <p>Humidity</p>
                            </div>
                        </div>
                        <div className="flex gap-1">
                            <LuWind className="relative top-1" size={50} />
                            <div className="flex flex-col gap-2">
                                <p>{Math.round(data.speed)}km/h</p>
                                <p>Wind</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default WeatherForm;
