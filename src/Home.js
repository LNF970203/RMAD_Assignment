import React, {Component} from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import styles from './Home.styles';

class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.view1}>
          <Image source={require('./cod.jpg')} style={styles.image} />
        </View>
        <View>
          <Image
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            style={styles.image}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;
