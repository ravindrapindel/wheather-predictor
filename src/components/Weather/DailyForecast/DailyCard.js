import classes from "./DailyCard.module.css";

function DailyCard(props){
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const days= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const weekday = days[(new Date(props.data.dt*1000)).getDay()];
  const day = (new Date(props.data.dt*1000)).getDate();
  const month = months[(new Date(props.data.dt*1000)).getMonth()];
  const maxtemp = parseInt(parseFloat(props.data.temp.max)-273.15);
  const mintemp = parseInt(parseFloat(props.data.temp.min)-273.15);
  const humidity =props.data.humidity;
  const windspeed = parseInt(props.data["wind_speed"]*3.6);
  const percipitation = parseInt(props.data.pop*100);


return(
    <>
    <div className={classes.card}>
    <div className={classes.day}> {weekday}</div>
    <div className={classes.date}> {month}, {day}</div>
    <div className={classes.temp}> <i className="fas fa-temperature-high"></i>{maxtemp}°/{mintemp}°</div>
    <div className={classes.humidity}>  <img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-humidity-weather-justicon-flat-justicon.png" alt="humidity-icon"/>  {humidity}%</div>
    <div className={classes.wind}>  <i className="fas fa-wind"></i> {windspeed} KMPH </div>
    <div className={classes.rain}> <i className="fas fa-cloud-rain"> </i> {percipitation}% </div>
   </div>
   </>
)
}

export default DailyCard;