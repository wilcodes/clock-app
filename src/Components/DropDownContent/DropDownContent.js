import {Label, Content, DropDownBox, Row} from "./DropDownStyles";


const DropDownContent = (props)=>{
    return(
        <DropDownBox isDropDownOpen={props.isDropDownOpen}>
            <Row>
                <Label>
                    current timezone
                </Label>

                <Content>
                    {props.timeZone}
                </Content>
            </Row>

            <Row>
                <Label>
                    Day of the year
                </Label>

                <Content>
                    {props.year}
                </Content>
            </Row>

            <Row>
                <Label>
                    day of the week
                </Label>

                <Content>
                    {props.weekDay}
                </Content>
            </Row>

            <Row>
                <Label>
                   week number
                </Label>

                <Content>
                    {props.week}
                </Content>
            </Row>

        </DropDownBox>
        )

};

export default DropDownContent;