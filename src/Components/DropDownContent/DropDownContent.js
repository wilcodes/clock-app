import {Label, Content, DropDownBox, Row} from "./DropDownStyles";


const DropDownContent = (props)=>{
    return(
        <DropDownBox isDropDownOpen={props.isDropDownOpen}>
            <Row>
                <Label>
                    current timezone
                </Label>

                <Content>
                    Europe/London
                </Content>
            </Row>

            <Row>
                <Label>
                    current timezone
                </Label>

                <Content>
                    Europe/London
                </Content>
            </Row>

            <Row>
                <Label>
                    current timezone
                </Label>

                <Content>
                    Europe/London
                </Content>
            </Row>

            <Row>
                <Label>
                    current timezone
                </Label>

                <Content>
                    Europe/London
                </Content>
            </Row>

        </DropDownBox>
        )

};

export default DropDownContent;