import {QuoteContent, QuoteWrapper} from "./StyledQuote";


const Quote = (props) =>(
    <QuoteWrapper>
        <QuoteContent>
            {props.message}
        </QuoteContent>
        <QuoteContent>
            {props.author}
        </QuoteContent>
    </QuoteWrapper>
);

export default Quote;