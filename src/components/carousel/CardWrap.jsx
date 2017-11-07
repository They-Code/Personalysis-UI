import React, { Component } from 'react';
import '../../styles/common.css';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import {Card, CardActions, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


export default class CardWrap extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {};


    }

    render()
    {
        return(
            <Container>
                <Row>
                    <Col sm='12' md='12' lg='12'>
                        <Card>
                            <CardText>
                                <h1><strong>{this.props.question}</strong></h1>
                                <TextField multiLine={true} rows={1} rowsMax={2}/>
                            </CardText>
                            <CardActions>
                                <FlatButton label="Prev" onClick={() => {this.props.onClickHandler('prev')}}/>
                                <FlatButton label="Next" onClick={() => {this.props.onClickHandler('next')}}/>
                            </CardActions>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}