/**
 * Home.js
 *
 * @jpatambag
 */
import * as firebase from 'firebase';
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';

import NavigationBar from 'react-native-navigation-bar';
import styles from '../style/styles.js';
import style_home from '../style/styles.js'

export default class Home extends Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={styles.content_container}>
          <View style={styles.navContainer}>
              <NavigationBar 
                  title={'Home'}
                  height={44}
                  titleColor={'#fff'}
                  backgroundColor={'#149be0'}
                  //leftButtonTitle={'back'}
                  //leftButtonTitleColor={'#fff'}
                  //rightButtonTitle={'forward'}
                  //rightButtonTitleColor={'#fff'}
              >
              </NavigationBar>
          </View>
          <View style={styles.scrollContainer}>
              <ScrollView showsHorizontalScrollIndicator={false} 
                contentContainerStyle={style_home.content_container}
                showsVerticalScrollIndicator={false} >
                  <View style={style_home.weather_container}>
                      <Text>view 1</Text>
                  </View>
                  <View style={style_home.places_container}>
                    <Text>view 2</Text>
                  </View>
                  <View style={style_home.event_container}>
                    <Text>view 3</Text>
                  </View>
              </ScrollView>
          </View>
      </View>
    );
  }
}
