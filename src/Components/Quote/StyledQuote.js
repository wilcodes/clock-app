import styled from "styled-components";

export const QuoteWrapper = styled.section`
  margin-top: 0.5em;
`;

export const QuoteContent = styled.p`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 0.9em;
  color: #FFFFFF;
  line-height: 20px;
  font-weight: lighter;
  filter: drop-shadow(2px 2px 2px #000000);

  @media only screen and (min-width: 700px)  {
    font-size: 2.1em;
    line-height: 1.4em;
    font-weight: 200;
  }
`;

export const QuoteAuthor = styled.p`
  margin-top: 0.7em;
  font-weight: 200;
  color: #ffffff;
  font-size: 1.5em;
  filter: drop-shadow(2px 2px 2px #000000);
  font-style: italic;
`