import React, { Component } from 'react'
import { View, Button, Text, Alert } from 'react-native'
import styles from '../../Css';
import register from '../controller/userController'
import { Card } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
export class RegisterComponent extends Component {
    constructor() {
        super();
        this.state = {
            firstname: '',
            lastname: '',
            phonenumber: '',
            email: '',
            password: '',
        }
    }
    handlefirstname = event => {
        // console.warn(event)
        this.setState({ firstname: event});
        // console.warn("firstname", this.state.firstname);
    };
    handlelastname = event => {
        // console.warn(event)
        this.setState({ lastname: event});
        // console.log("lastname", this.state.lastname);
    };
    handlephonenumber = event => {
        // console.warn(event)
        this.setState({ phonenumber: event});
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
            firstName: this.state.firstname,
            lastName: this.state.lastname,
            phoneNumber:this.state.phonenumber,
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
                <TextInput
                    value={this.state.firstname}
                    onChangeText={this.handlefirstname}
                    placeholder={'Firstname'}
                    style={styles.input1}>
                </TextInput>
                <TextInput
                    value={this.state.lastname}
                    onChangeText={this.handlelastname}
                    placeholder={'Lastname'}
                    style={styles.input1}>
                </TextInput>
                <TextInput
                    value={this.state.phonenumber}
                    onChangeText={this.handlephonenumber}
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