import { DropDownBox, BoxGridOne} from "./DropDownStyles";
import Description from "./Description";


const DropDownContent = (props)=>{
    const content = [
        {label: "current Timezone", content:props.timeZone},
        {label: "day of the year", content:props.year},
        {label: "day of the week", content:props.weekDay},
        {label: "week number", content:props.week}]
    return(
        <DropDownBox isDropDownOpen={props.isDropDownOpen}
                     dayNight={props.dayNight}   >

            {/*{content.map((el, id)=>(*/}
            {/*    <Description label={el.label}*/}
            {/*                 content={el.content}*/}
            {/*                 key={id}*/}
            {/*                 dayNight={props.dayNight}*/}
            {/*    />*/}
            {/*    ))}*/}
                <BoxGridOne>
                    <div>
                        <Description label={content[0].label}
                                     content={content[0].content}
                                     dayNight={props.dayNight}   />

                        <Description label={content[1].label}
                                     content={content[1].content}
                                     dayNight={props.dayNight}   />
                    </div>



                <div>
                    <Description label={content[2].label}
                                 content={content[2].content}
                                 dayNight={props.dayNight}   />

                    <Description label={content[3].label}
                                 content={content[3].content}
                                 dayNight={props.dayNight}   />
                </div>

                </BoxGridOne>


        </DropDownBox>
        )

};

export default DropDownContent;