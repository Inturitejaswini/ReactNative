import React, {Component} from 'react';
import {View, Button, Text, Image} from 'react-native';
import {Card} from 'react-native-elements';
import styles from '../Styles';
import {userLogin} from '../services/userServices';
import AsyncStorage from '@react-native-community/async-storage';
import Snackbar from 'react-native-snackbar-component';
import {TextInput} from 'react-native-gesture-handler';
export class LoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      SnackbarMsg: '',
      snackbarOpen: false,
    };
  }
  handleEmail = (event) => {
    this.setState({email: event});
  };
  handlePassword = (event) => {
    this.setState({password: event});
  };
  handleLogin = () => {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)
    ) {
      this.setState({
        snackbarOpen: true,
        SnackbarMsg: 'Invalid Email',
      });
    } else if (this.state.password === '') {
      this.setState({
        snackbarOpen: true,
        SnackbarMsg: 'Invalid password',
      });
    } else {
      const user = {
        email: this.state.email,
        password: this.state.password,
      };
      userLogin(user)
        .then((response) => {
          let Id = AsyncStorage.setItem('@storage_Key', response.data.id);
          let AccessToken = AsyncStorage.getItem('@storage_Key');
          this.props.navigation.navigate('dashboard');
        })
        .catch((err) => {
          this.setState({
            snackbarOpen: true,
            snackbarMsg: err,
          });
        });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          autoHideDuration={3000}
          open={this.state.snackbarOpen}
          message={<span id="message-id">{this.state.SnackbarMsg}</span>}
        />
        <Card style={styles.cardContainer}>
          <View>
            <Text style={styles.Text}>Member Login</Text>
          </View>
          <View>
            <Image
              source={require('../assets/accounticon.png')}
              style={styles.accounticon1}></Image>
          </View>
          <TextInput
            value={this.state.email}
            onChangeText={this.handleEmail}
            placeholder={'Username'}
            style={styles.input}></TextInput>
          <TextInput
            value={this.state.password}
            onChangeText={this.handlePassword}
            placeholder={'Password'}
            secureTextEntry={true}
            style={styles.input}></TextInput>
          <View style={styles.btn}>
            <Button onPress={this.handleLogin} title="Login" color="#00B0FF" />
          </View>
          <View style={styles.btn2}>
            <Button
              onPress={() => this.props.navigation.navigate('registration')}
              title="Register"
              color="#00B0FF"
            />
          </View>
          <View style={styles.forgot}>
            <Text
              onPress={() => this.props.navigation.navigate('forgetPassword')}>
              Forgot Password?
            </Text>
          </View>
        </Card>
      </View>
    );
  }
}
export default LoginComponent;
