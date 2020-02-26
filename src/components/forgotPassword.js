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
export class Forgot extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',

        }
    }
    handleemail = event => {
        this.setState({ email: event.target.value });
        console.log("email", this.state.email);
    };
   

    handleForgot = () => {
        alert("Clicked On Button !!!");
    };
    render() {
        return (
            <View style={styles.forgotcontainer}>
                <View >
                    <Text style={styles.Text3}>ForgotPassword</Text>
                </View>
                <TextInput
                    value={this.state.email}
                    onChangeText={this.handleemail}
                    placeholder={'Username'}
                    style={styles.input3}>
                </TextInput>
               
                <View style={styles.forgotbtn1}>
                    <Button
                        onPress={this.handleForgot}
                        title="Submit"
                        color="#00B0FF"
                    />
                </View>
                {/* <View >
                    <Text
                        style={styles.forgotbtn2}
                        onPress={() => this.props.navigation.navigate('login')}
                        title="Goback"
                        color="#00B0FF"
                    />
                </View> */}
            </View>
        )
    }
}
export default Forgot