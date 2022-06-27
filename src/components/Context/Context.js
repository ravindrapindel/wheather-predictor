import React from "react";
import { useState} from "react";
// created react context
const  DataContext = React.createContext({
    // data has all the weather data  
        currentdata:[],
        currentdataHandler : ()=>{},
        historydata:[],
        historydataHandler : ()=>{},
    });


export function ContextProvider(props){
    const [currentdata, setCurrentdata] = useState(props.currentdata);
    const [historydata, setHistorydata] = useState(props.historydata);

    
   function currentdataHandler(e){
       setCurrentdata(e);
   }
   function historydataHandler(e){
    setHistorydata(e);
   }

    return(
        <DataContext.Provider value={{"currentdata" : currentdata,
        "currentdataHandler" : currentdataHandler,
        "historydata" : historydata,
        "historydataHandler" : historydataHandler,
        }}>
            {props.children}
        </DataContext.Provider>

    )
    
}
export default DataContext;