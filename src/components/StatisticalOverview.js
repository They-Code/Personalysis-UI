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
            <Container className="statistical-overview">
                <Row>
                    <Col md="12">
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleTabChange}
                        >
                            <Tab label="Tab A" value="a">
                                <BarGraph />
                            </Tab>
                            <Tab label="Tab B" value="b">
                                <div>
                                    <h2 style={styles.headline}>Controllable Tab B</h2>
                                    <p>
                                    This is another example of a controllable tab. Remember, if you
                                    use controllable Tabs, you need to give all of your tabs values or else
                                    you wont be able to select them.
                                    </p>
                                </div>
                            </Tab>
                            <Tab label="Tab C" value="c">
                                <div>
                                    <h2 style={styles.headline}>Controllable Tab C</h2>
                                    <p>
                                    This is another example of a controllable tab. Remember, if you
                                    use controllable Tabs, you need to give all of your tabs values or else
                                    you wont be able to select them.
                                    </p>
                                </div>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default StatisticalOverview;
