import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native';

import Register from './Register';
import Forgot from './Forgot';
import firebase from 'firebase';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
  }

  linker(comp) {
    this.props.navigator.push({
      component: comp
    })
  }

  submitme() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function(user) {
      alert("Logged in!");
    }).catch(function(e) {
      alert(e);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.intro}>
          BoltCam
        </Text>
        <TextInput style={styles.ramInput}
          onChangeText={(email) => this.setState({email})}
          placeholder={"Enter email"}
          color={"white"}
          placeholderTextColor={"white"}
          padding={5}
          borderRadius={2}
        />
        <TextInput style={styles.ramInput}
          onChangeText={(password) => this.setState({password})}
          placeholder={"Enter password"}
          secureTextEntry={true}
          color={"white"}
          placeholderTextColor={"white"}
          padding={5}
          borderRadius={2}
        />

        <TouchableHighlight onPress={this.submitme.bind(this)} underlayColor={'transparent'}>
            <View style={styles.bigbutton}>
              <Text style={styles.welcome}>
                Login
              </Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.linker.bind(this, Register)} underlayColor={'transparent'}>
          <View style={styles.box}>
            <Text style={styles.boxtext}>
              Register
            </Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.linker.bind(this, Forgot)} underlayColor={'transparent'}>
          <View style={styles.forgotbox}>
            <Text style={styles.boxtext}>
              Forgot password?
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
    marginBottom: 10,
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  intro: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color: '#235e71',
    marginBottom: 50,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  box: {
    height: 45,
    width: 300,
    backgroundColor: "#62cf7d",
    justifyContent: "center",
    marginBottom: 10,
    borderRadius: 2,
  },
  boxtext: {
    color: "white",
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "500",
  },
  forgotbox: {
    height: 45,
    width: 300,
    backgroundColor: "#cf7d62",
    justifyContent: "center",
    borderRadius: 2,
  },
});
