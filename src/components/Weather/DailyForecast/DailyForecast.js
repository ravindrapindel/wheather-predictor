import { useContext } from "react";
import DataContext from "../../Context/Context";
import DailyCard from "./DailyCard";
import classes from "./DailyForecast.module.css";

function DailyForecast(){
  const cntx = useContext(DataContext); 
  const DailyCards = cntx.historydata.daily.map((datas, index) => {
    return <DailyCard key ={index} data={datas}  />}
    );

return(<>
    <div className={classes.Hours} >
      
    <div className={classes.heading}> 7 Days Forecast</div>
    
    <div className={classes.main}> 
       
    {DailyCards}
     </div>
   </div>
   </>
);

}
export default DailyForecast;