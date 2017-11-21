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
                    <Tab label="Tab A" value="a">
                        <BarGraph />
                    </Tab>
                    <Tab label="Tab B" value="b">
                    </Tab>
                    <Tab label="Tab C" value="c">
                        <Quiz />
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default StatisticalOverview;
