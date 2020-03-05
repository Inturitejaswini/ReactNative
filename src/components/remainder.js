import React, { Component } from "react";
import {Button,View,Text,Card,TouchableOpacity,Picker} from "react-native";
import styles from "../Styles";
import DateTimePicker from "react-native-modal-datetime-picker";
import {  Divider } from "react-native-elements";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import Dialog from "react-native-dialog";
export default class ReminderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTimePickerVisible: false,
      isDatePickerVisible: false,
      visible: false,
      selectedHours: 0,
      selectedMinutes: 0,
      openTime: false,
      user: "",
      date: "",
      time: "",
      reminderValue: ""
    };
  }
  showDialog = () => {
    this.setState({ dialogVisible: true });
  };

  handleCancel = () => {
    this.setState({ dialogVisible: false });
  };

  handleSave = async () => {
    let value = this.state.date + " " + this.state.time;
    console.log("value", value);
    await this.setState({
      reminderValue: value,
      dialogVisible: false
    });
    console.warn("reminder value", this.state.reminderValue);
    this.props.reminderProps(this.state.reminderValue);
  };
  showDatePicker = () => {
    this.setState({ isDatePickerVisible: true });
  };
  showTimePicker = () => {
    this.setState({ isTimePickerVisible: true });
  };
  hideDatePicker = () => {
    this.setState({ isDatePickerVisible: false });
  };
  hideTimePicker = () => {
    this.setState({ isTimePickerVisible: false });
  };
  handleDatePicked = date => {
    console.warn("A date has been picked: ", date);
    let date1 = "" + date;
    let dateFormat = date1.slice(4, 10);
    this.setState({
      date: dateFormat
    });
    console.warn("date after state", this.state.date);

    this.hideDatePicker();
  };
  handleTimePicked = time => {
    console.warn("A time has been picked: ", time);
    let Time1 = "" + time;
    let timeFormat = Time1.slice(16, 21);
    this.setState({
      time: timeFormat
    });
    console.warn("time after state", this.state.time);

    this.hideTimePicker();
  };
  updateUser = user => {
    this.setState({ user: user });
  };
  render() {
    return (
      <View>
        <TouchableOpacity>
          <Icon1 name="bell-plus-outline" size={25} 
          onPress={this.showDialog} 
          style={styles.alerticon}/>
        </TouchableOpacity>
        <Dialog.Container visible={this.state.dialogVisible}>
          <Dialog.Title>Add reminder</Dialog.Title>
          <TouchableOpacity onPress={this.showDatePicker}>
            <Picker
              selectedValue={this.state.user}
              onValueChange={this.updateUser}>
              <Picker.Item label="select the date" />
            </Picker>
          </TouchableOpacity>
          <Text style={styles.text}>{this.state.date}</Text>
          <DateTimePicker
            isVisible={this.state.isDatePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDatePicker}/>
          <Divider />
          <TouchableOpacity onPress={this.showTimePicker}>
            <Picker
              selectedValue={this.state.user}
              onValueChange={this.updateUser}>
              <Picker.Item label="select the time" />
            </Picker>
          </TouchableOpacity>
          <Text style={styles.text}>{this.state.time}</Text>
          <DateTimePicker
            mode="Time"
            isVisible={this.state.isTimePickerVisible}
            onConfirm={this.handleTimePicked}
            onCancel={this.hideTimePicker}/>
          <Dialog.Button label="Cancel" onPress={this.handleCancel} />
          <Dialog.Button label="save" onPress={this.handleSave} />
        </Dialog.Container>
      </View>
    );
  }
}