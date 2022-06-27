import { useContext, useEffect } from "react";
import { useState } from "react";
import DataContext from "../Context/Context";
import classes from "./SearchBox.module.css";



const  key ="2ab3fe01c1940330d27c19cda6ab0a0e";



function SearchBox(){
  const [name, setName] = useState("gurgaon");
  const [value, setValue] = useState("");
  const cntx = useContext(DataContext);
  const [isNameEntered, setIsNameEntered] = useState(false);
  
 
 function inputHandler(e){
   if(e.key === 'Enter'){
    setName(()=>e.target.value);
    setValue("");
   setIsNameEntered(()=>true);
   }
  }
function valueHandler(e){
  setValue(e.target.value);
}

async function fetchHistoryData(lat,lon) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${key}`);
  const json = await response.json();  
 
  cntx.historydataHandler(json);
 }
async function fetechCurrentData(lat,lon){
const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
const json = await response.json();
cntx.currentdataHandler(json);

}

async function fetchData(){
  if(isNameEntered){
  const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${key}`);
    const json = await response.json();
    if(json.length){
     const lat = await json[0].lat;
     const lon = await json[0].lon;
     fetchHistoryData(lat,lon);
     fetechCurrentData(lat,lon);
    }
    else{
      alert( name + " not found please enter your city name")
    }
}
}
  useEffect(()=>{
    fetchData();
      
  },[name])
    
    return(<>
        <div className={classes.SearchBox}>
     <input type="text" placeholder="Weather in your city.." onKeyPress={inputHandler} value={value} onChange={valueHandler}/>
    </div> 
   
    </>
    )
}

export default SearchBox;