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
import { View, Button, Text} from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome';
// import image from '../assets/avatar.jpeg'
import {Card} from 'react-native-elements';
import styles from '../../Css';
import {Login} from '../controller/userController'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';
export class LoginComponent extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',

        }
    }
    handleusername = event => {
        // console.warn(event)
        this.setState({ email: event });
        // console.warn("email", this.state.email);
    };
    handlepassword = event => {
        // console.warn(event)
        this.setState({ password: event });
        // console.warn("password", this.state.password);
    };
    handleLogin = () => {
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        console.log("new user dateils", user);
        Login(user).then(response => {
            console.warn("response coming to userlogin", response)
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