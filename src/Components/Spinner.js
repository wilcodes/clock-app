import styled from "styled-components";

export const SpinnerWrapper = styled.div`
  width: 200px;
  height: 600px;
  position: absolute; /*Can also be \`fixed\`*/
  left: 0;
  right: 0;
  top: 50%;
  bottom: 0;
  margin: auto;
  /*Solves a problem in which the content is being cut when the div is smaller than its' wrapper:*/
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
`;