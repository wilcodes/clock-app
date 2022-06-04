import {QuoteContent, QuoteWrapper, QuoteAuthor} from "./StyledQuote";


const Quote = (props) => (
    <QuoteWrapper>
        <QuoteContent>
            "{props.message}"
        </QuoteContent>
        <QuoteAuthor>
            {props.author}
        </QuoteAuthor>
    </QuoteWrapper>
);

export default Quote;