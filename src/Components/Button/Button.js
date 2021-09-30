import {useState, useEffect} from "react";
import {ButtonStyled, ButtonContent,IconWrapper} from "./ButtonStyle";
import {FaAngleDown, FaAngleUp} from "react-icons/fa";


const Button = (props) => {
    const [buttonContent, setButtonContent] = useState("More");

    useEffect(()=>{
        if(props.isDropDownOpen){
            setButtonContent("Less")
        }else {
            setButtonContent("More")
        }

    },[props.handleButton, props.isDropDownOpen])
    return(
        <ButtonStyled onClick={() => props.handleButton(props.isDropDownOpen)}>
            <ButtonContent>
                {buttonContent}
            </ButtonContent>
            <IconWrapper>
                {props.isDropDownOpen ? <FaAngleDown style={{color: "#ffffff"}}/> : <FaAngleUp style={{color: "#ffffff"}}/> }
            </IconWrapper>
        </ButtonStyled>
        )
};


export default Button;