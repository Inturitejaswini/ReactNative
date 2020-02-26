import React, { Component } from 'react'
import { View, Button, Text, Alert } from 'react-native'
import styles from '../../Css';
import register from '../controller/userController'
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
        console.warn(event)
        this.setState({ firstname: event});
        console.log("firstname", this.state.firstname);
    };
    handlelastname = event => {
        console.warn(event)
        this.setState({ lastname: event});
        console.log("lastname", this.state.lastname);
    };
    handlephonenumber = event => {
        console.warn(event)
        this.setState({ phonenumber: event});
        console.log("phonenumber", this.state.phonenumber);
    };
    handleemail = event => {
        console.warn(event)
        this.setState({ email: event});
        console.log("email", this.state.email);
    };
    handlepassword = event => {
        console.warn(event)
        this.setState({ password: event});
        console.log("password", this.state.password);
    };
    handleregister = () => {
        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phonenumber:this.state.phonenumber,
            email: this.state.email,
            password: this.state.password,
            service:"basic",
        }
        console.warn("new user datails", user);
        register(user).then((response) => {
            if(response) {
                console.log("response coming to user", response)
            }
        })
        //this.props.history.push('/login')
    }
    handleLogin = () => {
        this.props.history.push('./login')
        alert("Clicked On Button !!!");
    };
    render() {
        return (
            <View style={styles.registercontainer}>
                <Card>
                <View >
                    <Text style={styles.Text1}>Register</Text>
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
                        onPress={this.handleRegister}
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