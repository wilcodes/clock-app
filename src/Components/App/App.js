import {useState, useEffect} from "react";
import Wrapper from "../Wrapper/Wrapper";
import useApi from "../../hooks/useApi";
import {ClockLoader} from "react-spinners";
import {isEmpty} from "./objectFunction";
import Quote from "../Quote/Quote";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";
import CurrentTime from "../CurrentTime/CurrentTime";
const worldTimeAPI = "http://worldtimeapi.org/api/ip";
const geolocationAPI = "https://freegeoip.app/json/";
const quoteAPI = "https://api.quotable.io/random";



const App = (props)=> {

    const [worldTimeData, setWorldTimeData] = useState({});
    const [locationData, setLocationData] = useState({});
    const [quoteData, setQuoteData] = useState({})

    const worldTime = useApi(worldTimeAPI);
    const location = useApi(geolocationAPI);
    const quote = useApi(quoteAPI);


   useEffect(()=>{
       setWorldTimeData(worldTime);
       setLocationData(location);
       setQuoteData(quote);
   },[worldTime, location, quote])


    const handleTime = (string, cut) =>{
       let time = string.split("T").pop();
       time = time.substring(0,cut);
       return time
    }

    const handleReturn = () =>{
       if( isEmpty(worldTimeData) || isEmpty(locationData) || isEmpty(quoteData)){
           return <ClockLoader size={200} color={"#ffffff"}/>
       }else {
           return (
               <>
                   <Quote message={quoteData.data.content} author={quoteData.data.author}/>
                   <WelcomeMessage time={handleTime(worldTime.data.datetime, 2)}/>
                   <CurrentTime currentTime={handleTime(worldTime.data.datetime,5)} currentTimeZone={worldTime.data.abbreviation}/>
               </>
           )
       }

    }
  return (
   <Wrapper>
       {handleReturn()}
   </Wrapper>
  );
}

export default App;
