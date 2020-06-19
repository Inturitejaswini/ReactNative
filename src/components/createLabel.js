import React, { Component } from "react";
import { ScrollView, Text, TextInput, View, TouchableOpacity } from "react-native";
import styles from '../Styles';
import PlusIcon from "react-native-vector-icons/MaterialCommunityIcons";
import CrossIcon from "react-native-vector-icons/Entypo";
import DoneIcon from "react-native-vector-icons/MaterialIcons";
import { Divider } from 'react-native-paper';
import { getAllLabels } from '../services/noteServices'
import { CheckBox } from 'react-native-elements'
var CheckValue = [];
export class CreateLabelComponent extends Component {
  constructor() {
    super();
    this.state = {
      labelValue: "",
      selectedLabels: "",
      labelData: [],
      checkBox: [],
      checked: false,
      label: false,
      labelName: ""
    };
  }
  static navigationOptions = {
    drawerLabel: "CreateLabel",
    drawerIcon: <PlusIcon name="plus" size={25} />,
  };
  handleSelection = (labelName) => {
    this.setState({
      selectedLabels: labelName
    });
  };
  componentDidMount() {
    this.getLabels()
  }
  getLabels() {
    getAllLabels().then(res => {
      this.setState({
        labelData: res.data.data.details
      })
    })
  }
  handleArrow = () => {
    this.props.navigation.navigate('dashboard')
  }
  render() {
    let labelDetails = [];
    labelDetails = this.state.labelData.map(labelkey => {
      CheckValue[labelkey.id] = false
      return (
        <View style={styles.labels}>
          <CheckBox
            style={styles.labelcheckbox}
            title={labelkey.label}
            checked={this.state.checkBox[labelkey.id]}
            onPress={() => this.handleSelection(labelkey.label, labelkey.id, this.state.checkBox[labelkey.id])}>
          </CheckBox>
        </View>
      );
    });
    return (
      <View>
        <View style={styles.collaboratorcontainer}>
          <TouchableOpacity onPress={this.handleArrow}>
            <Icon name="arrow-left" size={35} />
          </TouchableOpacity>
          <Text style={styles.editlabeltext}>Edit labels</Text>
        </View>
        <Divider type='horizontal' style={styles.height}></Divider>
        <View style={styles.editcrossicon}>
          <View style={styles.crossicon}>
            <CrossIcon name="cross" size={25} />
          </View>
          <View >
            <TextInput
              style={styles.editTextinput}
              placeholder="Createnew label"
              value={this.state.searchValue}
              onChangeText={this.handleSearchValue} />
          </View>
          <View>
            <DoneIcon
              style={styles.doneicon}
              name="done"
              size={25} />
          </View>
        </View>
        <Divider type='horizontal' style={styles.height}></Divider>
        <ScrollView>{labelDetails}</ScrollView>
      </View>
    )
  }
}
export default CreateLabelComponent

