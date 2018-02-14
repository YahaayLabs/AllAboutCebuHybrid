/**
 * AboutMe.js
 *
 * @jpatambag
 */

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';

import styles from '../style/styles.js';

export default class AboutMe extends Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          ABOUT ME
        </Text>
      </View>
    );
  }
}
