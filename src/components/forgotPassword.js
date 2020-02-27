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
import { Card } from 'react-native-elements';
import styles from '../../Css';
import { TextInput } from 'react-native-gesture-handler';
export class Forgot extends Component {
    constructor() {
        super();
        this.state = {
            newPassword: '',

        }
    }
    handlenewPassword = event => {
        this.setState({ newPassword: event});
        console.log("newPassword", this.state.newPassword);
    };

    handleForgot = () => {
        const user = {
            newPassword:this.state.newPassword
        }
        console.warn("new user pasword datails", user);
        Fotgot(user).then((response) => {
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
                    value={this.state.newPassword}
                    onChangeText={this.handlenewPassword}
                    placeholder={'newPassword'}
                    style={styles.input3}>
                </TextInput>
                <View style={styles.forgotbtn1}>
                    <Button
                        onPress={this.handleForgot}
                        title="Submit"
                        color="#00B0FF"
                    />
                </View>
              </Card>
            </View>
        )
    }
}
export default Forgot