import {ClockWrapper, Time, TimeZone} from "./CurrentTimeStyles";

const CurrentTime = (props) => {
    return (
        <ClockWrapper>
            <Time>
                {props.currentTime}
            </Time>
            <TimeZone>
                {props.currentTimeZone}
            </TimeZone>
        </ClockWrapper>
    )
}

export default CurrentTime;