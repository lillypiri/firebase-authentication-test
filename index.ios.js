import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { Navigator } from "react-native-deprecated-custom-components";
import firebase from "firebase";
import Login from "./Login";

//put your own values in here
firebase.initializeApp({
  apiKey: "<YOUR API KEY>",
  authDomain: "YOURAPP.firebaseapp.com",
  databaseURL: "https://YOURAPP.firebaseio.com",
  storageBucket: "YOURAPP.appspot.com"
});

if (!firebase.apps.length) {
    firebase.initializeApp({});
}

export default class boltcamauth extends Component {
  renderScene(route, navigator) {
    return <route.component navigator={navigator} />;
  }

  render() {
    return (
      <Navigator
        initialRoute={{ component: Login }}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

AppRegistry.registerComponent("boltcamauth", () => boltcamauth);
