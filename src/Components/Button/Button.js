import {ButtonStyled, ButtonContent,IconWrapper} from "./ButtonStyle";
import {FaAngleDown} from "react-icons/fa";

const Button = (props) => (
    <ButtonStyled onClick={()=>props.handleButton()}>
            <ButtonContent>
                More
            </ButtonContent>
           <IconWrapper>
               <FaAngleDown style={{color:"#ffffff"}}/>
           </IconWrapper>


    </ButtonStyled>
);


export default Button;