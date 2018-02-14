/**
 * AllAboutCebuTabsView.js
 *
 * main app file
 *
 * @zchen
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  Text,
  View,
  TabBarIOS
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Home from './scenes/Home.js';
import WhatsNew from './scenes/WhatsNew.js';
import Places from './scenes/Places.js';
import Profile from './scenes/AboutMe.js';

import color from './style/color';

import {
  firebaseApp,
  SCENE_TRANSITION_FLOAT_RIGHT,
  SCENE_TRANSITION_FLOAT_LEFT
} from './constants';

const BaseConfig = Navigator.SceneConfigs.FloatFromBottom;

const propTypes = {};

export default class TabViewController extends Component {
  constructor(props) {
    super(props);

    this.onTabSelect = this.onTabSelect.bind(this);
    this.state = {
      selectedTab: 'Home',
    };
  }

  onTabSelect(tab) {
    if (this.state.selectedTab !== tab) {
      this.setState({
        selectedTab: tab
      });
    }
  }

  render() {
    return (
      <TabBarIOS
        unselectedTintColor={color.gray}
        tintColor={color.black}
        barTintColor={color.navbarGray}>
        <Icon.TabBarItemIOS
          title="Home"
          iconName="ios-list-box-outline"
          selectedIconName="ios-list-box"
          selected={this.state.selectedTab === 'Home'}
          onPress={() => this.onTabSelect('Home')}
        >

        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="What's New"
          iconName="ios-create-outline"
          selectedIconName="ios-create"
          selected={this.state.selectedTab === 'WhatsNew'}
          onPress={() => {
            const prevTab = this.state.selectedTab;
            this.setState({
              selectedTab: 'WhatsNew'
            });
            this.props.navigator.push({
              name: 'WhatsNew'});
            this.setState({
              selectedTab: prevTab
            });
          }} >
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Places"
          iconName="ios-settings-outline"
          selectedIconName="ios-settings"
          selected={this.state.selectedTab === 'Places'}
          onPress={() => this.onTabSelect('Places')}
        >

        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Profile"
          iconName="ios-settings-outline"
          selectedIconName="ios-settings"
          selected={this.state.selectedTab === 'AboutMe'}
          onPress={() => this.onTabSelect('AboutMe')}
        >

        </Icon.TabBarItemIOS>
      </TabBarIOS>

    );
  }
}
