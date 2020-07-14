import React, {Component} from 'react';
import {View, Button, Text, Image} from 'react-native';
import {Card} from 'react-native-elements';
import styles from '../Styles';
import {UserLogin} from '../services/userServices';
import AsyncStorage from '@react-native-community/async-storage';
import Snackbar from 'react-native-snackbar-component';
import {TextInput} from 'react-native-gesture-handler';
export class LoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      snackIsVisible: false,
    };

  }
  handleEmail = (event) => {
    this.setState({email: event});
  };
  handlePassword = (event) => {
    this.setState({password: event});
  };
  handleLogin =  () => {
    if (this.state.email === '') {
      this.setState({
        snackIsVisible: !this.state.snackIsVisible,
      });
    } else if (this.state.password === '') {
      this.setState({
        snackIsVisible: !this.state.snackIsVisible,
      });
    } else {
      const user = {
        email: this.state.email,
        password: this.state.password,
      };
      UserLogin(user).then((response) => {
        let Id = AsyncStorage.setItem('@storage_Key', response.data.id);
        let AccessToken = AsyncStorage.getItem('@storage_Key');
        this.props.navigation.navigate('dashboard');
      });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Snackbar
          style={styles.snackbar}
          visible={this.state.snackIsVisible}
          textMessage="enter the requirements"
          actionHandler={() => {
            alert('fill the correct email and password');
            this.setState({
              snackIsVisible: !this.state.snackIsVisible,
            });
          }}
          actionText="lets go"
          distanceCallback={(distance) => {
            this.setState({distance: distance});
          }}></Snackbar>
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
