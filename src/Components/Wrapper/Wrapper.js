import styled from "styled-components";
import mobileDayBackground from "../../assets/mobile/bg-image-daytime.jpg";
import mobileNightBackground from "../../assets/mobile/bg-image-nighttime.jpg";
const Wrapper = styled.div`
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: ${props => props.time === "daylight" ? `url(${mobileDayBackground})`: `url(${mobileNightBackground})` } ;
`

export default Wrapper;