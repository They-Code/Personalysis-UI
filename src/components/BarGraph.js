import React, { Component } from 'react';
import '../styles/profilePage.css';

import { ORFrame } from 'semiotic';

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
    { phenotype: "Gambling", score: 3 },
    { phenotype: "Novelty Seeking", score: 1 },
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
            width: window.innerWidth * .9,
            height: window.innerHeight
        });
    }

    render() {
        return (
            <div className="bar-graph">
                <ORFrame
                    size={[this.state.width, 500]}
                    data={barChartData}
                    oAccessor={"phenotype"}
                    rAccessor={"score"}
                    style={{
                        fill: "#00a2ce",
                        stroke: "white",
                    }}
                    type={"bar"}
                    oLabel={true}
                />
            </div>
        );
    }
}

export default BarGraph;
