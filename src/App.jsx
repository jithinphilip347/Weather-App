import WeatherForm from './Components/WeatherForm'
import SkyCloud from './assets/SkyCloud.jpg'

const App = () => {
  return (
    <div className="flex justify-center items-center bg-gray-300 h-screen relative">
      <div className="w-full h-full absolute inset-0 bg-black opacity-100">
        <img src={SkyCloud} alt="" className="w-full h-full object-cover rounded-lg z-0" />
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <WeatherForm />
      </div>
    </div>
  )
}

export default App;
