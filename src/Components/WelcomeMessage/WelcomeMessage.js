import {MessageContent, MessageWrapper} from "./StyledMessage";
import {useEffect, useState, useCallback} from "react";
import {FaMoon, FaSun} from "react-icons/fa"

const WelcomeMessage = ({time, setDayNightState}) => {
    const [welcomeMessage, setWelcomeMessage] = useState("Good morning, It's currently");

    const handleWelcomeMessage = useCallback(() => {
        if (parseInt(time) >= 18) {
            setWelcomeMessage("Good evening, It's currently");
            setDayNightState("Night")
        }
    }, [setDayNightState, time],);

    useEffect(() => {
        handleWelcomeMessage();
    }, [welcomeMessage, handleWelcomeMessage])

    return (
        <MessageWrapper>
            <MessageContent>
                {welcomeMessage === "Good morning, It's currently" ? <FaSun/> : <FaMoon/>} {welcomeMessage}
            </MessageContent>
        </MessageWrapper>)
};

export default WelcomeMessage;