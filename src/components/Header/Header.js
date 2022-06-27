import SearchBox from "../SearchBox/SearchBox";
import classes from "./Header.module.css"

function Header(props){
  var theme;
  if(props.theme ==="Dark"){
    theme= "Light"
  }
  if(props.theme !=="Dark"){
    theme = "Dark"
  }
  
    return(
   <div className={classes.Header}> 
    <button className={classes.Btn} onClick={props.themehandler}> {theme} Theme </button>
   <div className={classes.Weather}> <i className="fas fa-cloud"></i> <span> Weather Predictor </span></div>
   <div> <SearchBox /> </div>
  </div>
    )
}

export default Header;