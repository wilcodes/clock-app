import {useState, useEffect} from "react";
import Wrapper from "../Wrapper/Wrapper";
import useApi from "../../hooks/useApi";
import {ClockLoader} from "react-spinners";
import {isEmpty} from "./objectFunction";

const worldTimeAPI = "http://worldtimeapi.org/api/ip";
const geolocationAPI = "https://freegeoip.app/json/";
const quoteAPI = "https://api.quotable.io/random";


const App = (props)=> {

    const [worldTimeData, setWorldTimeData] = useState({});
    const [locationData, setLocationData] = useState({});
    const [quoteData, setQuoteData] = useState({})
    const worldTime = useApi(worldTimeAPI);
    const location = useApi(geolocationAPI);
    const quote = useApi(quoteAPI)


   useEffect(()=>{
       setWorldTimeData(worldTime);
       setLocationData(location);
       setQuoteData(quote);
   },[worldTime, location, quote])


    const handleReturn = () =>{
       if( isEmpty(worldTimeData) || isEmpty(locationData) || isEmpty(quoteData)){
           return null
       }else {
           return (
               <>
                   <ClockLoader size={200} color={"#ffffff"}/>
                   <h1>{worldTimeData.data.datetime}</h1>
                   <h1>{locationData.data.region_name}</h1>
                   <h1>{quoteData.data.content}</h1>
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
