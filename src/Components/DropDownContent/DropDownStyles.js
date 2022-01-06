import styled from "styled-components";

export const DropDownBox = styled.div`
  position: fixed;
  z-index: 100;
  width:100%;
  left: 0;
  bottom: 0;
  height: 75%;
  background-color:${ props  => props.dayNight ==="daylight" ? 'rgba(151, 151, 151, 0.9)' : 'rgba(0,0,0,0.9)'};
  
  
  transition: transform 0.1s ease-in;
  box-sizing: border-box;
  transform: ${ props  => props.isDropDownOpen ? 'translateY(50%)' : 'translateY(100%)'};
  padding: 0.5em;
`;

export const Label = styled.li`
  color: ${props => props.dayNight === "daylight" ? '#000000' : '#ffffff'};

  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 15px;
  font-size: 0.7em;
  text-align: left;
  flex: 0 0 37%;
  margin-left: 2em;


  @media only screen and (min-width: 374px)  {
    font-size: 0.9em;
    
  }

  @media only screen and (min-width: 700px)  {
    font-size: 1.5rem;
    line-height: 30px;
    
  }

  @media only screen and (min-width: 1023px)  {
    font-size: 1.3rem;
    flex:0 0 auto;
    margin-left: 0;
    text-align: left;
    line-height: 15px;
  }
`;

export const Content = styled.li`
  color:${ props  => props.dayNight ==="daylight" ? '#000000' : '#ffffff'};
  font-weight: 700;
  line-height: 10px;
  flex: 0 0 60%;
  text-align: center;
  font-size: 1em;

  @media only screen and (min-width: 370px)  {
    font-size: 1.3em;
    
  }  
  @media only screen and (min-width: 700px)  {
  font-size: 2rem;
  line-height: 20px;
}
  @media only screen and (min-width: 1023px)  {
    flex:0 0 auto;
    margin-left: 0;
    line-height: 68px;
    text-align: left;
    font-size:3rem;
    font-weight: Bold;
    
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

  @media only screen and (min-width: 700px)  {
    margin:1.7rem 0;
  }
  @media only screen and (min-width: 1023px)  {
    flex-flow: column;
    justify-content: center;
    
  }
  
`;


export const BoxGridOne = styled.div`
  @media only screen and (min-width: 1023px)  {

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    padding: 1rem;
    box-sizing: border-box;
    margin-left: 1rem;
  }
  
`;



