import React from 'react';
import {Text, View} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';

const GradientText = props => {
  return (
    <MaskedView
      maskElement={<Text style={{textAlignVertical:"bottom",color:"red"}} {...props} />}>
        <LinearGradient
          colors={props.colors}
          start={props.start}
          end={props.end}>
          <Text {...props} style={[props.style, {opacity: 0}]} />
        </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
