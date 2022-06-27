import { useContext } from "react";
import { useState } from "react";
import DataContext from "../../Context/Context";
import HourCard from "./HourCard";
import classes from "./HourlyPrediction.module.css";
var brandCurrentPage=0;
function HourlyPrediction(){
  const cntx = useContext(DataContext);
  // const [brandCurrentPage,setBrandCurrentPage] = useState(0);
  const [myStyle, setMystyle] = useState( {display: "flex",
  flexWrap: "nowrap",
  justifyContent: "left",
  margin: "1px" });
  const HourCards = cntx.historydata.hourly.map((datas, index) => {
   if(index){
    return <HourCard key ={index} data={datas}  />}
   else{
       return null;
   }
  }  );
 

function prevHandler(){
  if(brandCurrentPage){
    brandCurrentPage--;
    // setBrandCurrentPage((prev)=> { return prev - 1}); 
    setMystyle(()=>{ return {display: "flex",
      flexWrap: "nowrap",
      justifyContent: "left",
      margin: "1px", 
  transitionDuration : '0.5s', transform : `translateX(-${brandCurrentPage*113}px)`}
  
})
 
}
}


function nextHandler(){
  if(brandCurrentPage<46){
    brandCurrentPage++;
    // setBrandCurrentPage((prevState)=> { return prevState + 1});
    setMystyle( ()=>{ return  {display: "flex",
    flexWrap: "nowrap",
    justifyContent: "left",
    margin: "1px", 
transitionDuration : '0.5s', transform : `translateX(-${brandCurrentPage*113}px)`}
  })}
  
}

return(<>
    <div className={classes.Hours}>
    <div className={classes.prev}><button onClick={prevHandler}> <i className="fas fa-chevron-circle-left"></i></button></div>
   <div  className={classes.next}><button onClick={nextHandler}><i className="fas fa-chevron-circle-right"></i></button> </div> 
   
    <div className={classes.heading}> Hourly Forecast</div>
    
    <div style={myStyle} > 
       
    {HourCards}
     </div>
   </div>
   </>
);

}
export default HourlyPrediction;