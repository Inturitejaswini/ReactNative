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
import { Snackbar } from 'react-native-paper'
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
            snackbarOpen: false,
            snackbarMessage: '',
            visible: false,

        }
    }
    x
    handlefirstName = async (event) => {
        // console.warn(event)
        if (event.match("^[a-zA-z ]*$") != null) {
            this.setState({ firstName: event });
            // console.warn("firstname", this.state.firstname);
        }
        else {
            this.setState({ snackbarOpen: true, snackbarMessage: " *first name should contain only characters" })
        }
    };
    handlelastName = async (event) => {
        // console.warn(event)
        if (event.match("^[a-zA-z ]*$") != null) {
            this.setState({ lastName: event });
            // console.log("lastname", this.state.lastname);
        }
        else {
            this.setState({ snackbarOpen: true, snackbarMessage: " *last name should contain only characters" })
        }
    };
    handlephoneNumber = async (event) => {
        // console.warn(event)
        if (event.match("^[0-9 ]") != null) {
            this.setState({ phoneNumber: event });
            // console.log("phonenumber", this.state.phonenumber);
        }
        else {
            await this.setState({ snackbarOpen: true, snackbarMessage: " *number should be 10 digits" })
        }
    };
    handleemail = async (event) => {
        // console.warn(event)        
        // if (event.match("^([a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z])*$") != null) {
            this.setState({ email: event });
            // console.log("email", this.state.email);
        // }
        // else {
        //     await this.setState({ snackbarOpen: true, snackbarMessage: " *enter valid email" })
        // }
    };
    handlepassword = async (event) => {
        // console.warn(event)
        if (event.match("^[0-9 ]*$") != null) {
            this.setState({ password: event });
            // console.warn("password", this.state.password);
        }
        else {
            await this.setState({ snackbarOpen: true, snackbarMessage: " *password should minimum 6 character" })
        }
    };
    handleregister = () => {
        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            password: this.state.password,
            service: "advance",
        }
        // console.warn("new user datails", user);
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
                        visible={this.state.snackbarOpen}>
                        {this.state.snackbarMessage}
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