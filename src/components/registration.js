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
import styles from '../Css';
import register from '../services/userServices'
import { Card } from 'react-native-elements';
import {Snackbar} from 'react-native-paper'
import { TextInput } from 'react-native-gesture-handler';
export class RegisterComponent extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
             password: '',
       
        }
    }
   x
    handlefirstName = event => {
        console.warn(event)
        this.setState({ firstName: event});
        console.warn("firstname", this.state.firstname);
    
    };
    handlelastName = event => {
        // console.warn(event)
        this.setState({ lastName: event});
        // console.log("lastname", this.state.lastname);
   
    };
    handlephoneNumber = event => {
        // console.warn(event)
        this.setState({ phoneNumber: event});
        // console.log("phonenumber", this.state.phonenumber);
  
    };
    handleemail = event => {
        // console.warn(event)
        this.setState({ email: event});
        // console.log("email", this.state.email);
   
    };
    handlepassword = event => {
        // console.warn(event)
        this.setState({ password: event});
        // console.warn("password", this.state.password);
   
    };
    handleregister = () => {
        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber:this.state.phoneNumber,
            email: this.state.email,
            password: this.state.password,
            service:"basic",
        }
        console.warn("new user datails", user);
        register(user).then((response) => {
                console.warn("response coming to user", response)
        })
    }
    handleLogin = () => {
        this.props.history.push('./login')
        alert("Clicked On Button !!!");
    };
    render() {
        return (
            <View style={styles.registercontainer}>
             <Card style={styles.cardcontainer1}>
                <View >
                    <Text style={styles.Text1}>Registration</Text>
                </View>
                <View>

                </View>
                <Snackbar
                     anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                     }}
                     open={this.state.snackbarOpen}
                     autoHideDuration={6000}
                     onClose={this.snackbarOpen}
                     message={<span id="messege-id" >
                        {this.state.snackbarMessage}</span>}>
                  </Snackbar>
                <TextInput
                    value={this.state.firstName}
                    onChangeText={this.handlefirstName}
                    placeholder={'Firstname'}
                    style={styles.input1}>
                </TextInput>
                <TextInput
                    value={this.state.lastName}
                    onChangeText={this.handlelastName}
                    placeholder={'Lastname'}
                    style={styles.input1}>
                </TextInput>
                <TextInput
                    value={this.state.phoneNumber}
                    onChangeText={this.handlephoneNumber}
                    placeholder={'Phonenumber'}
                    style={styles.input1}>
                </TextInput>
                <TextInput
                    value={this.state.email}
                    onChangeText={this.handleemail}
                    placeholder={'Email'}
                    style={styles.input1}>
                </TextInput>
                <TextInput
                    value={this.state.password}
                    onChangeText={this.handlepassword}
                    secureTextEntry={true}
                    placeholder={'Password'}
                    style={styles.input1}>
                </TextInput>
                <View style={styles.registerbtn}>
                    <Button
                        onPress={this.handleregister}
                        title="Register"
                        color="#00B0FF"
                    />
                </View>
                <View style={styles.loginbtn}>
                    <Button
                        onPress={() => this.props.navigation.navigate('login')}
                        title="Login"
                        color="#00B0FF"
                    />
                </View>
                </Card>
            </View>
        )
    }
}
export default RegisterComponent