/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import styles from './Home.styles';
const Lesson1 = () => {
  React.useEffect(() => {
    functionone();
  }, []);
  const [marks_, new_marks] = React.useState(0);

  const functionone = () => {
    const marks = 25;
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

    marks >= 75
    ? console.log("Grade is A"):marks >= 65
    ? console.log("Grade is B"):marks >= 55
    ? console.log("Grade is C"):marks >= 45
    ? console.log("Grade is S"): "Grade is W";

    switch (true){
      case marks >= 75:
        console.log("Grade now is A");
        break;
      case marks >= 65:
        console.log("Grade now is B")
        break;
      case marks >= 55:
        console.log("Grade now is C");
        break;
      case marks >= 45:
        console.log("Grade is now S");
        break;
      case marks < 45:
        console.log("Grade is W");
        break;
    };

  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>LESSON 01</Text>
        <Text>Marks</Text>
      </View>
    </SafeAreaView>
  );
};

export default Lesson1;
