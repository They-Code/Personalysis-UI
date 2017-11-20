import React, { Component } from 'react';
import '../styles/profile.css';

import { ResponsiveORFrame } from 'semiotic';

const barChartData = [
    { phenotype: "Agreeableness", score: 1 },
    { phenotype: "Neuroticism", score: 2 },
    { phenotype: "Extraversion", score: 3 },
    { phenotype: "Conscientiousness", score: 4 },
    { phenotype: "Openness", score: 5 },
    { phenotype: "Depression", score: 1 },
    { phenotype: "Anger", score: 3 },
    { phenotype: "Reward Dependence", score: 5 },
    { phenotype: "Harm Avoidance", score: 2 },
    { phenotype: "Novelty Seeking", score: 1 },
    { phenotype: "Gambling", score: 3 },
];

class BarGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: '0',
            height: '0',
        };

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({
            width: window.innerWidth * .76,
            height: window.innerHeight
        });
    }

    render() {
        return (
            <div className="bar-graph">
                <ResponsiveORFrame
                    data={barChartData}
                    margin={{ left: 20, top: 20, bottom: 100, right: 30 }}
                    oAccessor={d => d.phenotype}
                    oLabel={d => <text transform="rotate(45)">{d}</text>}
                    rAccessor={d => d.score}
                    renderMode={"sketchy"}
                    size={[this.state.width, 500]}
                    style={() => ({ fill: '#b3331d', opacity: 1, stroke: 'white' })}
                    type={"bar"}
                />
            </div>
        );
    }
}

export default BarGraph;
