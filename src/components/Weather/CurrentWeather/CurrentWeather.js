import { useContext } from "react";
import DataContext from "../../Context/Context";
import classes from "./CurrentWeather.module.css"
function CurrentWeather(){
   const cntx = useContext(DataContext);
   const name = cntx.currentdata.name;
   const temp = parseInt(parseFloat(cntx.currentdata.main.temp)-273.15);

    return(
    <>
    <div className={classes.Weather}>
    <div className={classes["Current-Weather"]}>
    <div className={classes.Heading}> Current Weather</div>
     <div className={classes["cloud-logo"]}> <i className="fas fa-cloud-sun fa-2x"></i> <div className={classes.temp} >  {temp}° </div> <div className={classes.city} > {name}</div></div>
     
    </div>
    </div>
    </>)

}
export default CurrentWeather;