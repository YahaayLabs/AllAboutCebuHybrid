/**
 * allaboutcebu.js
 *
 * main app file
 *
 * @jpatambag
 */

import * as firebase from 'firebase';
import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet,
  Image
} from 'react-native';
  
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons'
import Home from './scenes/Home.js';
import Places from './scenes/Places.js';
import AboutMe from './scenes/AboutMe.js';
import WhatsNew from './scenes/WhatsNew.js';
import styles from './style/styles.js';

import {
  deviceW,
  basePx
} from './constants';

export default class AllAboutCebuApp extends Component {

  constructor(props){ 
    super(props); 
    this._renderScene = this._renderScene.bind(this);
    this.state = { 
      selectedTab:"home" 
    } 
  }

  _renderScene(route, navigator) {
    switch (route.name) {
      case "Home":
        return (<Home
          {...route}
          navigator={navigator} />);
      case "Latest":
          return (<WhatsNew
            {...route}
            navigator={navigator} />);
      case "Places":
          return (<Places
            {...route}
            navigator={navigator} />);
      case "About":
            return (<AboutMe
              {...route}
              navigator={navigator} />);
      default:
        return;
    }
  }

  _configureScene(route) {
    switch (route.name) {
      case 'Home', 'Latest', 'Places', 'About':
        return Navigator.SceneConfigs.FloatFromBottom;
      default:
        return Navigator.SceneConfigs.HorizontalSwipeJump;
    }
  }

  

  render() {
    return (
      <TabNavigator style={styles.container_tab}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Image style={{width: 21, height: 21}} source={require('./resources/icons/home_default.png')} />}
          renderSelectedIcon={() => <Image style={{width: 21, height: 21}} source={require('./resources/icons/home_hover.png')} />}
          //badgeText="1"
          onPress={() => this.setState({selectedTab: 'home'})}>
          
          <Navigator
            initialRoute={{ name: 'Home' }}
            configureScene={this._configureScene}
            renderScene={this._renderScene}
          />

        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'latest'}
          title="What's new"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Image style={{width: 21, height: 21}} source={require('./resources/icons/weather_default.png')} />}
          renderSelectedIcon={() => <Image style={{width: 21, height: 21}} source={require('./resources/icons/weather_hover.png')} />}
          onPress={() => this.setState({selectedTab: 'latest'})}>
          
          <Navigator
            initialRoute={{ name: 'Latest' }}
            configureScene={this._configureScene}
            renderScene={this._renderScene}
          />

        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === 'places'}
          title="Places"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Image style={{width: 21, height: 21}} source={require('./resources/icons/places_default.png')} />}
          renderSelectedIcon={() => <Image style={{width: 21, height: 21}} source={require('./resources/icons/places_hover.png')} />}
          onPress={() => this.setState({selectedTab: 'places'})}>
          
          <Navigator
            initialRoute={{ name: 'Places' }}
            configureScene={this._configureScene}
            renderScene={this._renderScene}
          />

        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === 'about'}
          title="About"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Image style={{width: 21, height: 21}} source={require('./resources/icons/about_default.png')} />}
          renderSelectedIcon={() => <Image style={{width: 21, height: 21}} source={require('./resources/icons/about_hover.png')} />}
          onPress={() => this.setState({selectedTab: 'about'})}>
          
          <Navigator
            initialRoute={{ name: 'About' }}
            configureScene={this._configureScene}
            renderScene={this._renderScene}
          />
        </TabNavigator.Item>
      </TabNavigator>

    );
  }
}

