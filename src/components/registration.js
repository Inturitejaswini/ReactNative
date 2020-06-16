/******************************************************************************
* Execution : 1. default node cmd> node registration.js
* 2. if nodemon installed cmd> nodemodule registration.js
* 
* Purpose : create registration page.
* @description 
* 
* @file :registration
* @overview :registration form problem.
* @module :registration - This is optional if expeclictly its an npm or local package
* @author :tejaswini<chowdarytejaswini2@gmail.com>
* @version :0.61.5
* @since :-23-02-2020
******************************************************************************/

import React, { Component } from 'react'
import { View, Button, Text, Alert } from 'react-native'
import styles from '../Styles';
import register from '../services/userServices'
import { Card } from 'react-native-elements';
import Snackbar from "react-native-snackbar-component";
import { TextInput, ScrollView } from 'react-native-gesture-handler';
export class RegisterComponent extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      password: '',
      snackIsVisible: false,
      visible: false,

    }
  }
  x
  handleFirstName = (event) => {
    this.setState({ firstName: event });
  };
  handleLastName = (event) => {
    this.setState({ lastName: event });
  };
  handlePhoneNumber = (event) => {
    this.setState({ phoneNumber: event });
  };
  handleEmail = (event) => {
    this.setState({ email: event });
  };
  handlePassword = (event) => {
    this.setState({ password: event });
  };
  handleRegister = () => {
    if (this.state.firstName === "") {
      this.setState({
        snackIsVisible: !this.state.snackIsVisible
      });
    } else if (this.state.lastName === "") {
      this.setState({
        snackIsVisible: !this.state.snackIsVisible
      });
    }
    else if (this.state.phoneNumber === "") {
      this.setState({
        snackIsVisible: !this.state.snackIsVisible
      });
    } else if (this.state.email === "") {
      this.setState({
        snackIsVisible: !this.state.snackIsVisible
      });
    } else if (this.state.password === "") {
      this.setState({
        snackIsVisible: !this.state.snackIsVisible
      });
    } else {
      const user = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phoneNumber: this.state.phoneNumber,
        email: this.state.email,
        password: this.state.password,
        service: "advance",
      }
      register(user).then((response) => {
      })
    }
  }
  handleLogin = () => {
    this.props.history.push('./login')
  };
  render() {
    return (
      <View style={styles.registerContainer}>
        <Snackbar
          style={styles.snackbarCss}
          visible={this.state.snackIsVisible}
          textMessage="enter the requirements"
          actionHandler={() => {
            alert("fill all the details of registration");
            this.setState({
              snackIsVisible: !this.state.snackIsVisible
            });
          }}
          actionText="let's go"
          distanceCallback={distance => {
            this.setState({ distance: distance });
          }} />
        <Card style={styles.cardContainer1}>
          <View >
            <Text style={styles.Text1}>Registration</Text>
          </View>
          <View>

          </View>
          <Snackbar
            visible={this.state.snackbarOpen}>
            {this.state.snackbarMessage}
          </Snackbar>
          <TextInput
            value={this.state.firstName}
            onChangeText={this.handleFirstName}
            placeholder={'Firstname'}
            style={styles.input1}>
          </TextInput>
          <TextInput
            value={this.state.lastName}
            onChangeText={this.handleLastName}
            placeholder={'Lastname'}
            style={styles.input1}>
          </TextInput>
          <TextInput
            value={this.state.phoneNumber}
            onChangeText={this.handlePhoneNumber}
            placeholder={'Phonenumber'}
            style={styles.input1}>
          </TextInput>
          <TextInput
            value={this.state.email}
            onChangeText={this.handleEmail}
            placeholder={'Email'}
            style={styles.input1}>
          </TextInput>
          <TextInput
            value={this.state.password}
            onChangeText={this.handlePassword}
            secureTextEntry={true}
            placeholder={'Password'}
            style={styles.input1}>
          </TextInput>
          <View style={styles.registerbtn}>
            <Button
              onPress={this.handleRegister}
              title="Register"
              color="#00B0FF" />
          </View>
          <View style={styles.loginbtn}>
            <Button
              onPress={() => this.props.navigation.navigate('login')}
              title="Login"
              color="#00B0FF" />
          </View>
        </Card>
      </View>
    )
  }
}
export default RegisterComponent