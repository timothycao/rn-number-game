import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Number = props => {
  return (
    <View style={{...styles.container, ...props.style}}>
      <Text {...props} style={styles.number} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    marginVertical: 10
  },
  number: {
    fontSize: 19,
    marginHorizontal: 10
  }
});

export default Number;
