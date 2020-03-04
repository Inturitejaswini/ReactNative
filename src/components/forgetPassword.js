/******************************************************************************
* Execution : 1. default node cmd> node forgetpassword.js
* 2. if nodemon installed cmd> nodemodule forgetpassword.js
* 
* Purpose : create forgotpassword page.
* @description 
* 
* @file :forgetpassword.js
* @overview :forgotpassword form problem.
* @module :forgotpassword - This is optional if expeclictly its an npm or local package
* @author :tejaswini<chowdarytejaswini2@gmail.com>
* @version :1.0
* @since :-26-02-2020
******************************************************************************/

import React, { Component } from 'react'
import { View, Button, Text, Alert } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome';
import {Fotget} from '../services/userServices'
import { Card } from 'react-native-elements';
import styles from '../Styles';
import { TextInput } from 'react-native-gesture-handler';
export class Forget extends Component {
    constructor() {
        super();
        this.state = {
            email: '',

        }
    }
    handleemail = event => {
        console.warn(event)
        this.setState({ email: event});
        console.warn("newPassword", this.state.email);
    };

    handleForget = () => {
        const user = {
            email:this.state.email
        }
        console.warn("new user pasword datails", user);
        Fotget(user).then((response) => {
        console.warn("response coming to forgotpassword", response)
        })
    };
    render() {
        return (
            <View style={styles.forgotcontainer}>
              <Card style={styles.cardcontainer1}>
                <View >
                    <Text style={styles.Text3}>ForgotPassword</Text>
                </View>
                <TextInput
                    value={this.state.email}
                    onChangeText={this.handleemail}
                    placeholder={'email'}
                    style={styles.input3}>
                </TextInput>
                <View style={styles.forgotbtn1}>
                    <Button
                        onPress={this.handleForget}
                        title="Submit"
                        color="#00B0FF"
                    />
                </View>
              </Card>
            </View>
        )
    }
}
export default Forget