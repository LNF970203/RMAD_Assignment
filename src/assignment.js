/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import styles from './Home.styles';
const Lesson1 = () => {
  React.useEffect(() => {
    functionone();
  }, []);

  const functionone = () => {
    const marks = 45;
    if (marks >= 75) {
      console.log('Grade: A');
    } else if (marks >= 65 && marks < 75) {
      console.log('Grade B');
    } else if (marks >= 55 && marks < 65) {
      console.log('Grade C');
    } else if (marks >= 45 && marks < 55) {
      console.log('Grade: S');
    } else {
      console.log('Grade: W');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>LESSON 01</Text>
      </View>
    </SafeAreaView>
  );
};

export default Lesson1;
