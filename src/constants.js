import { Dimensions } from 'react-native';
import * as firebase from 'firebase';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const COVERIMAGE_HEIGHT = SCREEN_WIDTH / 3 * 2;

export const firebaseConfig ={
  apiKey: "AIzaSyCx5e3WWGBtY4tvstcKenZ3x_WLSv10VB4",
  authDomain : "allaboutcebu.com",
  databaseURL: "https://allaboutcebu-33f6d.firebaseio.com",
  storageBucket: "allaboutcebu-33f6d.appspot.com"
};

export const firebaseApp = firebase.initializeApp()
export const deviceW = Dimensions.get('window').width
export const basePx = 375