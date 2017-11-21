import React, { Component } from 'react';
import '../styles/profile.css';
import {
    Container,
    Row,
    Col,
} from 'muicss/react';



import {
    Tabs,
    Tab,
} from 'material-ui';

import BarGraph from './BarGraph.js';
import ChartVisual from './ChartVisual.js';
import Quiz from './Quiz.js';

const styles = {
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400,
    },
  };

class StatisticalOverview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 'a',
        };

        this.handleTabChange = this.handleTabChange.bind(this);
    }

    handleTabChange(value) {
        this.setState({
            value: value,
        });
    }

    render() {
        return (
            <div className="statistical-overview">
                <Tabs
                    value={this.state.value}
                    onChange={this.handleTabChange}
                >
                    <Tab label="Bar Graph" value="a">
                        <BarGraph />
                    </Tab>
                    <Tab label="Chart Visual" value="b">
                        <div>
                            <ChartVisual/>
                        </div>
                    </Tab>
                    <Tab label="Quiz" value="c">
                        <Quiz />
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default StatisticalOverview;
