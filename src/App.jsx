import WeatherForm from './Components/WeatherForm'
import SkyCloud from './assets/SkyCloud.jpg'


const App = () => {
  return (
    <div className="flex justify-center items-center bg-gray-300 h-screen">
      <div className=" w-[1200px] h-[500px] rounded-lg absolute  bg-black opacity-100">
        <img src={SkyCloud} alt="" className=" w-[1200px] h-[500px] rounded-lg z-0" />
         <WeatherForm />
      </div>

    </div>
  )
}

export default App