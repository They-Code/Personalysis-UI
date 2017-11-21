import React, { Component } from 'react';
import Radar from 'react-d3-radar';

class ChartVisual extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: '0',
            height: '0',
        };
    }
        render()
        {
            return (
                    <Radar
                        width={500}
                        height={500}
                        padding={70}
                        domainMax={10}
                        highlighted={null}
                        onHover={(point) => {
                            if (point) {
                                console.log('hovered over a data point');
                            } else {
                                console.log('not over anything');
                            }
                        }}
                        data={{
                            variables: [
                                {key: 'agreeableness', label: 'Agreeableness'},
                                {key: 'neuroticism', label: 'Neuroticism'},
                                {key: 'extraversion', label: 'Extraversion'},
                                {key: 'conscientiousness', label: 'Conscientiousness'},
                                {key: 'openness', label: 'Openness'},
                            ],
                            sets: [
                                {
                                    key: 'nature',
                                    label: 'Nature',
                                    values: {
                                        agreeableness: 4,
                                        neuroticism: 6,
                                        extraversion: 7,
                                        conscientiousness: 2,
                                        openness: 8,
                                    },
                                },
                                {
                                    key: 'nurture',
                                    label: 'Nurture',
                                    values: {
                                        agreeableness: 7,
                                        neuroticism: 2,
                                        extraversion: 4,
                                        conscientiousness: 9,
                                        openness: 8,
                                    },
                                },
                            ],
                        }}
                    />
            );
        }
    }

export default ChartVisual;
