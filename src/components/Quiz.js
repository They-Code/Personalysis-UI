import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import QuizAnswer from './QuizAnswer';

class Quiz extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            finished: false,
            stepIndex: 0,
        };

        this.stepLabels = [];
        this.questions = [];
    }

    handleNext = () => {
        const {stepIndex} = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
        });
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };

    componentWillMount() {
        for (let i = 0; i < 32; i++) {
            this.stepLabels.push(
                (
                    <Step style={{'marginLeft': '-10px'}}>
                        <StepLabel style={{'padding': '0 0'}}></StepLabel>
                    </Step>
                )
            );
            this.questions.push('Question ' + (i + 1));
        }
        console.log('questions', this.questions);
    }

    render() {
        const {finished, stepIndex} = this.state;
        const contentStyle = {margin: '0 16px'};

        return (
            <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
                <Stepper activeStep={stepIndex}>
                    {this.stepLabels}
                </Stepper>
                <div style={contentStyle}>
                    {finished ? (
                    <p>
                        <a
                            href="#"
                            onClick={(event) => {
                                event.preventDefault();
                                this.setState({stepIndex: 0, finished: false});
                        }}
                        >
                        Click here
                        </a> to reset the example.
                    </p>
                    ) : (
                    <div>
                        <p>{this.questions[stepIndex]}</p>
                        <QuizAnswer />
                        <div style={{marginTop: 12, marginBottom: 20}}>
                            <FlatButton
                                label="Back"
                                disabled={stepIndex === 0}
                                onClick={this.handlePrev}
                                style={{marginRight: 12}}
                            />
                            <RaisedButton
                                label={stepIndex === 31 ? 'Finish' : 'Next'}
                                primary={true}
                                onClick={this.handleNext}
                            />
                        </div>
                    </div>
                )}
            </div>
            </div>
        );
    }
}

export default Quiz;