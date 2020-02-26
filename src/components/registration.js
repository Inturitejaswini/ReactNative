import React, { Component } from 'react'
import { View, Button, Text, Alert } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../Css';
import { TextInput } from 'react-native-gesture-handler';
export class Register extends Component {
    constructor() {
        super();
        this.state = {
            firstname: '',
        }
    }
    handlefirstname = event => {
        this.setState({ firstname: event.target.value });
        console.log("firstname", this.state.firstname);
    };
    handlelastname = event => {
        this.setState({ lastname: event.target.value });
        console.log("lastname", this.state.lastname);
    };
    handlefullname = event => {
        this.setState({ fullname: event.target.value });
        console.log("fullname", this.state.fullname);
    };
    handleemail = event => {
        this.setState({ email: event.target.value });
        console.log("email", this.state.email);
    };
    handlepassword = event => {
        this.setState({ password: event.target.value });
        console.log("password", this.state.password);
    };
    handleRegister = () => {
        alert("Clicked On Button !!!");
    }
    handleLogin = () => {
        this.props.history.push('./login')
        alert("Clicked On Button !!!");
    };
    render() {
        return (
            <View style={styles.registercontainer}>
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
                    value={this.state.fullname}
                    onChangeText={this.handlefullname}
                    placeholder={'Fullname'}
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
            </View>
        )
    }
}
export default Register