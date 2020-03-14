import React, { Component } from "react";
import { View, Text, IconButton, TextInput } from "react-native";
import styles from '../Styles';
// import { colabarateNote } from "../services/noteServices";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import { Divider } from 'react-native-paper';
export class CreateLabelComponent extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  static navigationOptions = {
    drawerLabel: "CreateLabel",
    drawerIcon: <Icon name="plus" size={25} />,
  };
  render() {
    return (
      <View>
        <View
          style={styles.collaboratorcontainer}>
          <TouchableOpacity>
            <Icon name="arrow-left" size={35} />
          </TouchableOpacity>
          <Text style={styles.editlabeltext}>Edit labels</Text>
        </View>
        <Divider type='horizontal' style={{ height: 2 }}></Divider>
        <View style={styles.editcrossicon}>
        <View style={styles.crossicon}>
          <Icon1 name="cross" size={25} />
        </View>
        <View >
          <TextInput
            style={styles.editTextinput}
            placeholder="enter the mail to share..."
            value={this.state.searchValue}
            onChangeText={this.handleSearchValue}
          />
          </View>
          <View>
          <Icon2
           style={styles.doneicon}
            name="done"
            size={25} />
        </View>
        </View>
        <Divider type='horizontal' style={{ height: 2 }}></Divider>
      </View>
    )
  }
}
export default CreateLabelComponent

