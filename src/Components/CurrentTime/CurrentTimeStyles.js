import styled from "styled-components";

export const ClockWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Time = styled.h1`
  color: #ffffff;
  font-weight: 700;
  font-size: 80px;
  line-height: 80px;
  letter-spacing: -2.5px;
  @media only screen and (min-width: 700px)  {
    font-size: 120px;
    margin-top: 1rem;  
    margin-bottom: 1rem;
  }
`;

export const TimeZone = styled.p`
  color: #ffffff;
  font-weight: lighter;
  font-size: 17px;
  line-height: 28px;
  margin-left: 5px;
  margin-top:45px ;
`;