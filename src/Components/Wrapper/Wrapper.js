import styled from "styled-components";
import mobileDayBackground from "../../assets/mobile/bg-image-daytime.jpg";
import mobileNightBackground from "../../assets/mobile/bg-image-nighttime.jpg";
const Wrapper = styled.div`
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: ${props => props.time === "daylight" ? ` linear-gradient(rgba(0, 0, 0, 0.5),
                       rgba(0, 0, 0, 0.5)), url(${mobileDayBackground})`: `linear-gradient(rgba(0, 0, 0, 0.5),
                       rgba(0, 0, 0, 0.5)), url(${mobileNightBackground})` };
  box-sizing: border-box;
  padding: 2em;
`
export const HourWrapper = styled.div`
  margin: 0 auto;
  position: absolute;
  top: ${props => props.isDropDownOpen ? "30%": "65%"};
`
export default Wrapper;