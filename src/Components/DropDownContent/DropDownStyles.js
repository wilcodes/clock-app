import styled from "styled-components";

export const DropDownBox = styled.div`
  position: fixed;
  z-index: 100;
  width:100%;
  left: 0;
  bottom: 0;
  height: 75%;
  background-color:${ props  => props.dayNight ==="daylight" ? 'rgba(151, 151, 151, 0.9)' : 'rgba(0,0,0,0.9)'};
  
  
  transition: transform 0.3s ease-in;
  box-sizing: border-box;
  transform: ${ props  => props.isDropDownOpen ? 'translateY(50%)' : 'translateY(100%)'};
  padding: 0.5em;
`;

export const Label = styled.li`
  color:${ props  => props.dayNight ==="daylight" ? '#000000' : '#ffffff'};
 
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 12px;
  font-size: 0.7em;
  text-align: left;
  flex: 0 0 37%;
  margin-left: 2em;

  @media only screen and (min-width: 374px)  {
    font-size: 0.9em;
    line-height: 20px;
  }
`;

export const Content = styled.li`
  color:${ props  => props.dayNight ==="daylight" ? '#000000' : '#ffffff'};
  font-weight: 700;
  line-height: 10px;
  font-size: 1em;
  flex: 0 0 60%;
  text-align: center;

  @media only screen and (min-width: 370px)  {
    font-size: 1.3em;
    
  }
`;

export const Row = styled.ul`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  list-style: none;
  margin: 1.2em 0;
  @media only screen and (min-width: 370px)  {
    margin: 1.5em 0;
  }
 
`;

