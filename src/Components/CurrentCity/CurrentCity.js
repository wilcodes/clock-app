import {LocationContent, LocationWrapper} from "./CurrentCityStyles";

const CurrentCity = (props) => {

    return (
        <LocationWrapper>
            <LocationContent>
                {props.region}, {props.country}
            </LocationContent>
        </LocationWrapper>
    )
}

export default CurrentCity;