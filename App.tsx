import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        {' '}
        Hello React - native with typescript with new template
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
