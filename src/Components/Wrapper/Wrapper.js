import styled from "styled-components";
import mobileDayBackground from "../../assets/mobile/bg-image-daytime.jpg";
import mobileNightBackground from "../../assets/mobile/bg-image-nighttime.jpg";
import desktopDayBackground from "../../assets/desktop/bg-image-daytime.jpg";
import desktopNightBackground from "../../assets/desktop/bg-image-nighttime.jpg";
import tabletDayBackground from "../../assets/tablet/bg-image-daytime.jpg";
import tabletNightBackground from "../../assets/tablet/bg-image-nighttime.jpg";
const Wrapper = styled.div`
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: ${props => props.time === "daylight" ? ` linear-gradient(rgba(0, 0, 0, 0.5),
                       rgba(0, 0, 0, 0.5)), url(${mobileDayBackground})`: `linear-gradient(rgba(0, 0, 0, 0.5),
                       rgba(0, 0, 0, 0.5)), url(${mobileNightBackground})` };
  box-sizing: border-box;
  padding: 2em;
  @media only screen and (min-width: 700px)  {
    background-image: ${props => props.time === "daylight" ? ` linear-gradient(rgba(0, 0, 0, 0.5),
                       rgba(0, 0, 0, 0.5)), url(${tabletDayBackground})`: `linear-gradient(rgba(0, 0, 0, 0.5),
                       rgba(0, 0, 0, 0.5)), url(${tabletNightBackground})` };
  }

  @media only screen and (min-width: 1020px)  {
    background-image: ${props => props.time === "daylight" ? ` linear-gradient(rgba(0, 0, 0, 0.5),
                       rgba(0, 0, 0, 0.5)), url(${desktopDayBackground})`: `linear-gradient(rgba(0, 0, 0, 0.5),
                       rgba(0, 0, 0, 0.5)), url(${desktopNightBackground})` };
  }
  
  
  
`
export const HourWrapper = styled.div`
  margin: 0 auto;
  position: absolute;
  top: ${props => props.isDropDownOpen ? "30%": "55%"};
`
export default Wrapper;