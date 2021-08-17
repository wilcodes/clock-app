import Wrapper from "../Wrapper/Wrapper";
import useApi from "../../hooks/useApi";

const hourAPI = "http://worldtimeapi.org/api/ip";

const App = ()=> {

    const hourData = useApi(hourAPI);
  return (
   <Wrapper>
       {console.log(hourData)}
        <h1>Hey people</h1>
   </Wrapper>
  );
}
export default App;
