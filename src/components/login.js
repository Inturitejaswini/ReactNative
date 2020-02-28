/******************************************************************************
* Execution : 1. default node cmd> node login.js
* 2. if nodemon installed cmd> nodemodule login.js
* 
* Purpose : create login page.
* @description 
* 
* @file :login
* @overview :login form problem.
* @module :login - This is optional if expeclictly its an npm or local package
* @author :tejaswini<chowdarytejaswini2@gmail.com>
* @version :1.0
* @since :-23-02-2020
******************************************************************************/

import React, { Component } from 'react'
import { View, Button, Text } from 'react-native'
import { Card } from 'react-native-elements';
import styles from '../Css';
import { Image } from 'react-native';
import { Login } from '../services/userServices'
import { Snackbar } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';
export class LoginComponent extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            snackbarOpen: false,
            snackbarMessage: '',
        }
    }
    snackbarClose = (event) => {
        this.setState({ snackbarOpen: false })
     }
    handleusername = async (event) => {
        // console.warn(event)
        if (event.match("^([a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z])*$") != null) {
        await this.setState({ email: event });
        // console.warn("email", this.state.email);
    }
    else {
       await this.setState({ snackbarOpen: true, snackbarMessage: " *enter valid email" })
    }
    };
    handlepassword = async (event) => {
        // console.warn(event)
        if (event.match("^[0-9 ]*$") != null) {
       await this.setState({ password: event });
        //     // console.warn("password", this.state.password);
    }
    else {
      await this.setState({ snackbarOpen: true, snackbarMessage: " *password should minimum 6 character" })
    }
    };
    handleLogin = () => {
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        console.log("new user dateils", user);
        Login(user).then(response => {
            console.warn("response coming to userlogin", response)
            this.props.navigation.navigate('dashboard')
        }
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Card style={styles.cardcontainer}>
                    <View >
                        <Text style={styles.Text}>Member Login</Text>
                    </View>
                    <View >
                        <Image source={require("../assets/accounticon.png")}
                            style={styles.accounticon1}></Image>
                    </View>
                    <Snackbar
                     visible={this.state.snackbarOpen}>
                        {this.state.snackbarMessage}
                  </Snackbar>
                    <TextInput
                        value={this.state.username}
                        onChangeText={this.handleusername}
                        placeholder={'Username'}
                        style={styles.input}>
                    </TextInput>
                    <TextInput
                        value={this.state.password}
                        onChangeText={this.handlepassword}
                        placeholder={'Password'}
                        secureTextEntry={true}
                        style={styles.input}>
                    </TextInput>
                    <View style={styles.btn}>
                        <Button
                            onPress={this.handleLogin}
                            title="Login"
                            color="#00B0FF"
                        />
                    </View>
                    <View style={styles.btn2}>
                        <Button
                            onPress={() => this.props.navigation.navigate('registration')}
                            title="Register"
                            color="#00B0FF"
                        />
                    </View>
                    <View style={styles.forgot}>
                        <Text onPress={() => this.props.navigation.navigate('forgotPassword')}
                        >Forgot Password?</Text>
                    </View>
                </Card>
            </View>
        )
    }
}
export default LoginComponent
