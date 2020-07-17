import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';
import {userForgetPassword} from '../services/userServices';
import {Card} from 'react-native-elements';
import styles from '../Styles';
import Snackbar from 'react-native-snackbar-component';
import {TextInput} from 'react-native-gesture-handler';
export class Forgetpassword extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      snackbarMsg: '',
      snackbarOpen: false
    };
  }
  handleEmail = (event) => {
    this.setState({email: event});
  };

  handleForget = () => {
    if (this.state.email === '') {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
        const user = {
          email: this.state.email,
        };
        userForgetPassword(user)
          .then((res) => {
            if (res === undefined) {
              this.setState({
                snackbarOpen: true,
                snackbarMsg: 'Check your email',
              });
              setTimeout(() => {
                this.props.history.push('/login');
              }, 1000);
              return;
            } else {
              this.setState({
                snackbarOpen: true,
                snackbarMsg: 'Invalid email',
              });
            }
          })
          .catch((err) => {
            this.setState({
              snackbarOpen: true,
              snackbarMsg: err,
            });
          });
      }
    }
  };
  render() {
    return (
      <View style={styles.forgotContainer}>
        <Snackbar
          style={styles.snackbar}
          visible={this.state.snackIsVisible}
          textMessage="enter the requirements"
          actionHandler={() => {
            alert('fill the correct email');
            this.setState({
              snackIsVisible: !this.state.snackIsVisible,
            });
          }}
          actionText="lets go"
          distanceCallback={(distance) => {
            this.setState({distance: distance});
          }}></Snackbar>
        <Card style={styles.cardContainer1}>
          <View>
            <Text style={styles.Text3}>ForgotPassword</Text>
          </View>
          <TextInput
            value={this.state.email}
            onChangeText={this.handleEmail}
            placeholder={'email'}
            style={styles.input3}></TextInput>
          <View style={styles.forgotbtn1}>
            <Button
              onPress={this.handleForget}
              title="Submit"
              color="#00B0FF"
            />
          </View>
        </Card>
      </View>
    );
  }
}
export default Forgetpassword;
