import classes from "./HourCard.module.css";

function HourCard(props){
  const days= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const hours = ["12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM","1 PM", "2 PM", "3 PM", "4 PM","5 PM","6 PM", "7 PM","8 PM","9 PM", "10 PM", "11 PM" ]
  const day = days[(new Date(props.data.dt*1000)).getDay()];
  const hour = hours[(new Date(props.data.dt*1000)).getHours()];
  const temp = parseInt(parseFloat(props.data.temp)-273.15);
  const humidity =props.data.humidity;
  const percipitation = parseInt(props.data.pop*100);


return(
    <>
    <div className={classes.card}>
    <div className={classes.day}> {day}</div>
    <div className={classes.time}> {hour}</div>
    <div className={classes.temp}> <i className="fas fa-temperature-high"></i>{temp}°</div>
    <div className={classes.humidity}>  <img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-humidity-weather-justicon-flat-justicon.png" alt="humidity-icon"/>  {humidity}%</div>
    <div className={classes.rain}> <i className="fas fa-cloud-rain"> </i> {percipitation}% </div>
   </div>
   </>
)
}

export default HourCard;