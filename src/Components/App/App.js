import Wrapper from "../Wrapper/Wrapper";
import useApi from "../../hooks/useApi";
import {connect} from "react-redux";
import {setCurrentTime} from "../../actions/actions";
import {BounceLoader} from "react-spinners";
import {isEmpty} from "./objectFunction";

const worldTimeAPI = "http://worldtimeapi.org/api/ip";
const geolocationAPI = "https://freegeoip.app/json/";
const quoteAPI = "https://api.quotable.io/random";


const App = (props)=> {
    props.setCurrentTime(useApi(worldTimeAPI));

    const handlerApiCheck = () =>{
        if (isEmpty(props.currentTime)){
           return <BounceLoader/>
        }else {
           return <h1>{props.currentTime.data.datetime}</h1>
        }
    }

  return (
   <Wrapper>
       {handlerApiCheck()}
   </Wrapper>
  );
}
const mapStateToProps = state => ({
    currentTime: state.state.currentTime
})
export default connect(mapStateToProps, {setCurrentTime})(App);
