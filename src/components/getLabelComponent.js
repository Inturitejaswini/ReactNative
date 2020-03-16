import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { getAllLabels } from "../services/noteServices";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
export  class GetLabelComponent extends Component {
  constructor() {
    super();
    this.state = { 
        labelData: [] 
    };
  }

  static navigationOptions = {
    drawerLabel: "Labels",
    drawerIcon: <Icon name="label-outline" size={25} />
  };
  componentWillMount() {
    getAllLabels().then(response => {
      console.warn("res in label notes", response);
      this.setState({
        labelData: response.data.data.data
      });
      this.state.labelData.map(labelkey => {
        navigationOptions = {
          drawerLabel: labelkey.data().label,
          drawerIcon: <Icon name="label-outline" size={25} />
        };
      });

      console.warn("label data after setting state", this.state.labelData);
    });
  }
  render() {
    let labelDetails = this.state.labelData.map(labelkey => {
      console.log("key in label component---->", labelkey.data().label);
      return (
        <Text style={{ fontWeight: "bold" }}>{labelkey.data().label}</Text>
      );
    });
    return (
      <ScrollView style={{ flexDirection: "column" }}>
        {labelDetails}
      </ScrollView>
    );
  }
}
export default GetLabelComponent
