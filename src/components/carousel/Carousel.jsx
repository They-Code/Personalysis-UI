import React, { Component } from 'react';
import '../../styles/common.css';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import {Card, CardActions, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import CardWrap from './CardWrap.jsx'
import Slider from 'react-slick'
import './carousel.css'



export default class Carousel extends Component
{

    constructor(props)
    {
        super(props);
        this.questions = [  'filler question blah blah blah',
                            'Longer question just to see what that looks like in that lines of the echo echo echo echo',
                            'Final countdown questions!!!!!'
                         ];
        this.state = {};
    }




    render()
    {
        let settings = {
            dots: true,
            infinite: false,
            arrows: true,
            accessibility: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return(
            <Container>
                <Row>
                    <Col sm='12' md='12' lg='12'>
                        <Slider {...settings}>
                            <Container className="carousel-styles">
                                <Row>
                                    <Col sm='12' md='12' lg='12' className="card-styles-container">
                                        {
                                            () => {
                                                let arr = [];
                                                arr.push(this.questions.forEach((question, index) => {
                                                    <CardWrap question={question}/>
                                                })
                                                );
                                                return arr;
                                            }
                                        }
                                    </Col>
                                </Row>
                            </Container>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        )
    }
}