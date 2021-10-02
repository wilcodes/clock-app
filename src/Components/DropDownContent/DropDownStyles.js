import styled from "styled-components";

export const DropDownBox = styled.div`
  position: fixed;
  z-index: 100;
  width:100%;
  left: 0;
  bottom: 0;
  height: 75%;
  background-color:rgba(0,0,0,0.9);
  transition: transform 0.3s ease-in;
  box-sizing: border-box;
  transform: ${ props  => props.isDropDownOpen ? 'translateY(50%)' : 'translateY(100%)'};
  
`;

export const Label = styled.li`
  color: #ffffff;
  font-weight: lighter;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 10px;
  font-size: 0.7em;
  text-align: left;
  flex: 0 0 40%;
  margin-left: 2em;
`;

export const Content = styled.li`
  color: #ffffff;
  font-weight: 700;
  line-height: 10px;
  font-size: 1.5em;
  flex: 0 0 55%;
  text-align: center;
`;

export const Row = styled.ul`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  list-style: none;
  margin: 3em 0;
 
`;
