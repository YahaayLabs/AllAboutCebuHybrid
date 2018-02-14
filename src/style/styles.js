const React = require('react-native')
const {StyleSheet} = React
const constants = {
  actionColor: '#24CE84'
};

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  listview: {
    flex: 1,
  },
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  liContainer: {
    flex: 2,
  },
  liText: {
    color: '#333',
    fontSize: 16,
  },
  navbar: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    height: 44,
    flexDirection: 'row'
  },
  navbarTitle: {
    color: '#444',
    fontSize: 16,
    fontWeight: "500"
  },
  statusbar: {
    backgroundColor: '#fff',
    height: 22,
  },
  center: {
    textAlign: 'center',
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  action: {
    backgroundColor: constants.actionColor,
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  container_tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome_tab: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions_tab: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  
  content_container: {
    flex: 1,
    backgroundColor: 'powderblue'
  },

  weather_container: {
      backgroundColor: '#ee4242',
      height: 100,
      flex: 3, 
  },
  
  places_container: {
      backgroundColor: '#0b7c7c',
      flex: 3, 
  },

  event_container: {
      backgroundColor: '#0459ed',
      flex: 3, 
  },

  listview: {
      flex: 1,
  },

  navContainer: {
    backgroundColor: 'skyblue',
    height: 64
   },

  scrollContainer: {
    backgroundColor: 'steelblue',
    flex: 3
  }


})

var style_home = StyleSheet.create ({
  weather_container: {
    backgroundColor: '#ee4242',
    height: 200,
    flex: 3, 
  },
  places_container: {
    backgroundColor: '#0b7c7c',
    flex: 3, 
  },

  event_container: {
    backgroundColor: '#0459ed',
    flex: 3, 
  },

  listview: {
    flex: 1,
  },
});

function px2dp(px) {
  return px *  deviceW / basePx
}

module.exports = style_home
module.exports = styles
module.exports.constants = constants;
