import {useState, useEffect} from "react";
import Wrapper, {HourWrapper}from "../Wrapper/Wrapper";
import useApi from "../../hooks/useApi";
import {ClockLoader} from "react-spinners";
import {isEmpty} from "./objectFunction";
import Quote from "../Quote/Quote";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";
import CurrentTime from "../CurrentTime/CurrentTime";
import CurrentCity from "../CurrentCity/CurrentCity";
import {Backdrop} from "../Backdrop/Backdrop";
import {SpinnerWrapper} from "../Spinner";
import Button from "../Button/Button";
import DropDownContent from "../DropDownContent/DropDownContent";

const worldTimeAPI = "http://worldtimeapi.org/api/ip";
const geolocationAPI = "https://freegeoip.app/json/";
const quoteAPI = "https://api.quotable.io/random";



const App = (props)=> {

    const [worldTimeData, setWorldTimeData] = useState({});
    const [locationData, setLocationData] = useState({});
    const [quoteData, setQuoteData] = useState({});
    const [dayNight, setDayNight] = useState("daylight");
    const [isDropDownOpen, setDropDownOpen] = useState(false);
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
        setTimeout(()=>{
            return(
                <>
                    <Backdrop/>
                    <SpinnerWrapper>
                        <ClockLoader size={200} color={"#1A2321"} />
                    </SpinnerWrapper>

                </>
            )
        },[2000])
       if( isEmpty(worldTimeData) || isEmpty(locationData) || isEmpty(quoteData)){
           return (
               <>
                   <Backdrop/>
                   <SpinnerWrapper>
                       <ClockLoader size={200} color={"#1A2321"} />
                   </SpinnerWrapper>

               </>

           )
       }else {
           return (
               <>
                   <Quote message={quoteData.data.content} author={quoteData.data.author}/>
                   <HourWrapper  isDropDownOpen={isDropDownOpen}>
                   <WelcomeMessage time={handleTime(worldTime.data.datetime, 2)}
                                   setDayNightState={()=>setDayNight()}

                   />
                   <CurrentTime currentTime={handleTime(worldTime.data.datetime,5)}
                                currentTimeZone={worldTime.data.abbreviation}/>
                   <CurrentCity region={locationData.data.region_name}
                                country={locationData.data.country_code}/>
                   <Button handleButton={(isDropDownOpen)=> setDropDownOpen(!isDropDownOpen)}
                           isDropDownOpen={isDropDownOpen}

                   />
                   </HourWrapper>
                   <DropDownContent isDropDownOpen={isDropDownOpen}
                                    timeZone={location.data.time_zone}
                                    year={worldTime.data.day_of_year}
                                    weekDay={worldTime.data.day_of_week}
                                    week={worldTime.data.week_number}
                   />
               </>
           )
       }

    }
  return (
   <Wrapper time={dayNight}>
       {handleReturn()}
   </Wrapper>
  );
}

export default App;
