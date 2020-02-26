/******************************************************************************
* Execution : 1. default node cmd> node archive.jsx 
* 2. if nodemon installed cmd> nodemodule archive.jsx
* 
* Purpose : create archive page.
* @description 
* 
* @file :archive.jsx
* @overview :archive form problem.
* @module :archive - This is optional if expeclictly its an npm or local package
* @author :tejaswini<chowdarytejaswini2@gmail.com>
* @version :1.0
* @since :-28-01-2020
******************************************************************************/

import React, { Component } from 'react'
import { View, Button, Text, Alert } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../Css';
import { TextInput } from 'react-native-gesture-handler';
export class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',

        }
    }
    handleusername = event => {
        this.setState({ username: event.target.value });
        console.log("email", this.state.username);
    };
    handlepassword = event => {
        this.setState({ password: event.target.value });
        console.log("password", this.state.password);
    };

    handleLogin = () => {
        alert("Clicked On Button !!!");
    };
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.Text}>Member Login</Text>
                </View>
                <View>

                </View>
                <TextInput
                    value={this.state.username}
                    onChange={this.handleusername}
                    placeholder={'Username'}
                    style={styles.input}>
                </TextInput>
                <TextInput
                    value={this.state.password}
                    onChange={this.handlepassword}
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
                        onPress={this.handleLogin}
                        title="Register"
                        color="#00B0FF"
                    />
                </View>
                <View style={styles.forgot}>
                    <Text>Forgot Password?</Text>
                </View>
            </View>
        )
    }
}
export default Login