import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, HeaderSubtitle, HeaderSubtitle2} from 'components';
const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.container}>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
