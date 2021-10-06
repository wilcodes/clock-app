import { DropDownBox} from "./DropDownStyles";
import Description from "./Description";


const DropDownContent = (props)=>{
    const content = [
        {label: "current Time", content:props.timeZone},
        {label: "day of the year", content:props.year},
        {label: "day of the week", content:props.weekDay},
        {label: "week number", content:props.week}]
    return(
        <DropDownBox isDropDownOpen={props.isDropDownOpen}
                     dayNight={props.dayNight}   >

            { content.map((el, id)=>(
                <Description label={el.label}
                             content={el.content}
                             id={id}
                             dayNight={props.dayNight}
                />
                ))}

        </DropDownBox>
        )

};

export default DropDownContent;