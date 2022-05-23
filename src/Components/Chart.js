import React from 'react';
import {Defs, LinearGradient, Stop} from 'react-native-svg';
import {View} from "react-native"
import {LineChart, Grid} from 'react-native-svg-charts';

class GradientLineExample extends React.PureComponent {
  render() {
    const data = [
      50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80,
    ];

    return (
      <LineChart
        showGrid={true}
        style={{height: 200}}
        data={data}
        contentInset={{top: 20, bottom: 20}}
        svg={{
          strokeWidth: 2,
          stroke: '#4CD964',
        }}>
        <Grid />
        
      </LineChart>
    );
  }
}

export default GradientLineExample;
