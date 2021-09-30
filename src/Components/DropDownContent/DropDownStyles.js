import styled from "styled-components";

export const DropDownBox = styled.div`
  position: fixed;
  z-index: 100;
  width:100%;
  left: 0;
  bottom: 0;
  height: 75%;
  background-color:rgba(0,0,0,0.7);
  transition: transform 0.3s ease-in;
  box-sizing: border-box;
  transform: ${ props  => props.isDropDownOpen ? 'translateY(50%)' : 'translateY(100%)'};
`;

export const Label = styled.label``;

export const Content = styled.p``;

export const Row = styled.ul``;
