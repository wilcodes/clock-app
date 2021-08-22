import {MessageContent, MessageWrapper} from "./StyledMessage";
import {useEffect, useState} from "react";

const WelcomeMessage = (props) =>{
const [welcomeMessage,setWelcomeMessage] = useState("Good morning, It's currently");

const handleWelcomeMessage =()=>{
    if (parseInt(props.time) >= 20){
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
                {welcomeMessage}
            </MessageContent>
       </MessageWrapper>)
};

export default WelcomeMessage;