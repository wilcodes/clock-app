import {MessageContent, MessageWrapper} from "./StyledMessage";
import {useEffect, useState} from "react";
import {FaMoon, FaSun} from "react-icons/fa"
const WelcomeMessage = (props) =>{
const [welcomeMessage,setWelcomeMessage] = useState("Good morning, It's currently");

const handleWelcomeMessage =()=>{
    if (parseInt(props.time) >= 18){
        setWelcomeMessage("Good evening, It's currently");
        props.setDayNightState("Night")
    }
}
useEffect(()=>{
    handleWelcomeMessage()
},[welcomeMessage])

   return(
       <MessageWrapper>
            <MessageContent>
                {welcomeMessage === "Good morning, It's currently" ? <FaSun/> : <FaMoon/>} {welcomeMessage}
            </MessageContent>
       </MessageWrapper>)
};

export default WelcomeMessage;