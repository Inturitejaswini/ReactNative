import React, { Component } from "react";
import { Text, ScrollView } from "react-native";
import { getAllLabels } from "../services/noteServices";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
export class GetLabelComponent extends Component {
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
  componentDidMount() {
    getAllLabels().then(response => {
      this.setState({
        labelData: response.data.data
      });
    });
  }
  render() {
    let labelDetails = this.state.labelData.map(labelkey => {
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
