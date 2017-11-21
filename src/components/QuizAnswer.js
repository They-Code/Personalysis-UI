import React from 'react';
import Slider from 'material-ui/Slider';

class QuizAnswer extends React.Component {
    render() {
        return (
            <Slider step={0.10} value={0.5} />
        );
    }
}

export default QuizAnswer;