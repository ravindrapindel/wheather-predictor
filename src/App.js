import {useState, useEffect} from "react";
import './App.css';
import { ContextProvider } from "./components/Context/Context";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CurrentWeather from "./components/Weather/CurrentWeather/CurrentWeather";
import DailyForecast from "./components/Weather/DailyForecast/DailyForecast";
import HourlyPrediction from "./components/Weather/HourlyPrediction/HourlyPrediction";
const  key ="2ab3fe01c1940330d27c19cda6ab0a0e";



function App() {
  const [data, setData] = useState([]);
  const [loading, setLaoding] = useState(false);
  const [currentdata, setCurrentData] = useState([]);
  const [currentLoading, setCurrentLaoding] = useState(false);
  const [theme, setTheme] = useState("Dark");
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition,errorCallback);
    } else {
      console.log( "Geolocation is not supported by this browser.");
    }
  }
  
  function showPosition(position) {
    let lat, lon;
   lat = position.coords.latitude;
  lon = position.coords.longitude;
  fetchData(lat,lon);
  fetechCurrent(lat,lon);
  }
  
  function errorCallback(error) {
  if (error.code === error.PERMISSION_DENIED) {
      alert("Location access denied, Please allow me to access your loaction");
  }
  }


async function fetchData(lat,lon) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${key}`);
    const json = await response.json();  
    setData(()=> json);
    setLaoding(()=> true);
   
   }
async function fetechCurrent(lat,lon){
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
  const json = await response.json();
  setCurrentData(()=> json);
  setCurrentLaoding(()=>true);
}

  useEffect(()=>{
       getLocation();
  },[]);

  function themehandler(){
    if(theme === "Dark"){
      setTheme("Light");
    }
    else{
      setTheme("Dark");
    }
    
  }
  

   return (
    <div className={theme}> 
    
    { currentLoading && loading && <ContextProvider currentdata={currentdata} historydata={data}>
    <Header themehandler={themehandler} theme={theme} />
      <CurrentWeather /> 
      <HourlyPrediction />
      <DailyForecast />
      <Footer />
      </ContextProvider>
    }
    
    
    </div>
  );
}

export default App;
