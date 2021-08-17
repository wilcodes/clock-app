import Wrapper from "../Wrapper/Wrapper";
import useApi from "../../hooks/useApi";

const worldTimeAPI = "http://worldtimeapi.org/api/ip";
const geolocationAPI = "https://freegeoip.app/json/";
const quoteAPI = "https://api.quotable.io/random";

const App = ()=> {

    const hourData = useApi(worldTimeAPI);
    const ipLocation = useApi(geolocationAPI);
    const quote = useApi(quoteAPI);
  return (
   <Wrapper>
       {console.log(hourData)}
       {console.log(ipLocation)}
       {console.log(quote)}
        <h1>Hey people</h1>
   </Wrapper>
  );
}
export default App;
