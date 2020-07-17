import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';
import styles from '../Styles';
import {userRegistration} from '../services/userServices';
import {Card} from 'react-native-elements';
import Snackbar from 'react-native-snackbar-component';
import {TextInput} from 'react-native-gesture-handler';
export class RegisterComponent extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      password: '',
      snackIsVisible: false,
      visible: false,
    };
  }
  x;
  handleFirstName = (event) => {
    this.setState({firstName: event});
  };
  handleLastName = (event) => {
    this.setState({lastName: event});
  };
  handlePhoneNumber = (event) => {
    this.setState({phoneNumber: event});
  };
  handleEmail = (event) => {
    this.setState({email: event});
  };
  handlePassword = (event) => {
    this.setState({password: event});
  };

  handleRegister = () => {
    if (/^[a-zA-Z]{2,12}$/i.test(this.state.firstName)) {
      this.setState({
        snackbarOpen: true,
        SnackbarMsg: 'firstName cant contain numbers or special characters',
      });
    } else if (/^[a-zA-Z]{2,12}$/i.test(this.state.lastName)) {
      this.setState({
        snackbarOpen: true,
        SnackbarMsg: 'lastName cant contain numbers or special characters',
      });
    } else if (/^[0-9]+$/.test(this.state.phoneNumber)) {
      this.setState({
        snackbarOpen: true,
        SnackbarMsg: 'Invalid phoneNumber',
      });
    } else if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)
    ) {
      this.setState({
        snackbarOpen: true,
        SnackbarMsg: 'Invalid e-mail',
      });
    } else if (
      this.state.password === this.state.password.length > 5 &&
      this.state.password.length < 8
    ) {
      this.setState({
        snackbarOpen: true,
        SnackbarMsg: 'Invalid password',
      });
    } else {
      const user = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phoneNumber: this.state.phoneNumber,
        email: this.state.email,
        password: this.state.password,
        service: 'advance',
      };
      userRegistration(user)
        .then((res) => {
          if (res.user) {
            this.setState({
              snackbarOpen: true,
              SnackbarMsg: 'Registration Successful',
            });
          } else {
            this.setState({
              snackbarOpen: true,
              SnackbarMsg: 'Some problem occured while Registration',
            });
          }
        })
        .catch((err) => {
          this.setState({
            snackbarOpen: true,
            SnackbarMsg: err,
          });
        });
    }
  };
  handleLogin = () => {
    this.props.history.push('./login');
  };
  render() {
    return (
      <View style={styles.registerContainer}>
        <Snackbar
          style={styles.snackbarCss}
          visible={this.state.snackIsVisible}
          textMessage="enter the requirements"
          actionHandler={() => {
            alert('fill all the details of registration');
            this.setState({
              snackIsVisible: !this.state.snackIsVisible,
            });
          }}
          actionText="let's go"
          distanceCallback={(distance) => {
            this.setState({distance: distance});
          }}
        />
        <Card style={styles.cardContainer1}>
          <View>
            <Text style={styles.Text1}>Registration</Text>
          </View>
          <View></View>
          <Snackbar visible={this.state.snackbarOpen}>
            {this.state.snackbarMessage}
          </Snackbar>
          <TextInput
            value={this.state.firstName}
            onChangeText={this.handleFirstName}
            placeholder={'Firstname'}
            style={styles.input1}></TextInput>
          <TextInput
            value={this.state.lastName}
            onChangeText={this.handleLastName}
            placeholder={'Lastname'}
            style={styles.input1}></TextInput>
          <TextInput
            value={this.state.phoneNumber}
            onChangeText={this.handlePhoneNumber}
            placeholder={'Phonenumber'}
            style={styles.input1}></TextInput>
          <TextInput
            value={this.state.email}
            onChangeText={this.handleEmail}
            placeholder={'Email'}
            style={styles.input1}></TextInput>
          <TextInput
            value={this.state.password}
            onChangeText={this.handlePassword}
            secureTextEntry={true}
            placeholder={'Password'}
            style={styles.input1}></TextInput>
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
    );
  }
}
export default RegisterComponent;
