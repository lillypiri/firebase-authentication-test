import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native';
import firebase from 'firebase';
import Login from './Login';

export default class Forgot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    }
  }

  linker(comp) {
    this.props.navigator.push({
      component: comp
    })
  }

  submitme() {
    firebase.auth().sendPasswordResetEmail(this.state.email).then(function(user) {
      alert("Please check your email for a reset link.");
    }).catch(function(e) {
      alert(e);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.linker.bind(this, Login)} underlayColor={'transparent'}>
          <View style={styles.backbutton}>
            <Text style={styles.backbuttontext}>
              {'<'}
            </Text>
          </View>
        </TouchableHighlight>
        <Text style={styles.welcome}>
          Forgot
        </Text>
        <TextInput style={styles.ramInput}
          onChangeText={(email) => this.setState({email})}
          placeholder={"Enter email"}
          color={"white"}
          placeholderTextColor={"white"}
          padding={5}
          borderRadius={2}
        />
        <TouchableHighlight onPress={this.submitme.bind(this)} underlayColor={'transparent'}>
            <View style={styles.bigbutton}>
              <Text style={styles.welcome}>
                Send me a reset link
              </Text>
            </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigbutton: {
    height: 50,
    width: 300,
    backgroundColor: "#62cf7d",
    alignSelf: "center",
  },
  ramInput: {
    height: 50,
    width: 300,
    alignSelf: "center",
    backgroundColor: "#62b4cf",
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  backbutton: {
    marginTop: 30,
    marginLeft: 20,
    height: 50,
    width: 50,
    backgroundColor: "#62b4cf",
    justifyContent: "center",
    marginBottom: 10,
    borderRadius: 25,
  },
  backbuttontext: {
    marginTop: -5,
    color: "white",
    alignSelf: "center",
    fontSize: 32,
    fontWeight: "500",
  },
});
