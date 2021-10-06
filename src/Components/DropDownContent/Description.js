import {Content, Label, Row} from "./DropDownStyles";

const Description = (props)=>(
    <Row>
        <Label dayNight={props.dayNight}>
            {props.label}
        </Label>

        <Content dayNight={props.dayNight}>
            {props.content}
        </Content>
    </Row>
);

export default Description;