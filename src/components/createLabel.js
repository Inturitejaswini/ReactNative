import React, { Component } from "react";
import { ScrollView, Text, TextInput, View, FlatList, TouchableOpacity, CheckBox } from "react-native";
import styles from '../Styles';
// import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon6 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon7 from "react-native-vector-icons/Entypo";
import { Divider } from 'react-native-paper';
import { getAllLabels } from '../services/noteServices'
export class CreateLabelComponent extends Component {
  constructor() {
    super();
    this.state = {
      labelValue: "",
      selectedLabels: "",
      labelData: [],
      label: false,
    };
  }
  static navigationOptions = {
    drawerLabel: "CreateLabel",
    drawerIcon: <Icon name="plus" size={25} />,
  };
  handleSelection = async (labelName) => {
    // console.warn("id of label", labelName);
    await this.setState({
      selectedLabels: labelName
    });
    // console.warn("label  setstate", this.state.selectedLabels);
  };
  componentDidMount() {
    // this.handledetails();
    this.getLabels()
  }
  getLabels() {
    getAllLabels().then(async res => {
      await this.setState({
        labelData: res.data.data.details
      })
    })
  }
  handlearrow = () => {
    this.props.navigation.navigate('dashboard')
  }
  render() {
    // console.warn("to get labels", this.state.labelData)
    let labelDetails = this.state.labelData.map(labelkey => {
      // console.warn("key in label component---->", labelkey.label);
      return (
        <View style={styles.labels}>
          <Icon6 name="label-outline" size={25} />
          <Text style={styles.labeltex}>{labelkey.label}</Text>
          <TouchableOpacity>
            <Icon7 name="edit" style={styles.labeledit}></Icon7>
          </TouchableOpacity>
        </View>
      );
    });
    return (
      // <ScrollView>
      <View>
        <View style={styles.collaboratorcontainer}>
          <TouchableOpacity onPress={this.handlearrow}>
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
              placeholder="Createnew label"
              value={this.state.searchValue}
              onChangeText={this.handleSearchValue} />
          </View>
          <View>
            <Icon2
              style={styles.doneicon}
              name="done"
              size={25} />
          </View>
        </View>
        <Divider type='horizontal' style={{ height: 2 }}></Divider>
        <ScrollView>{labelDetails}</ScrollView>
      </View>
      // </ScrollView>
    )
  }
}
export default CreateLabelComponent

