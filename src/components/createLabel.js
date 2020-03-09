import React, { Component } from "react";
import { Image } from "react-native";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import styles from "../Styles";
import { getNotes } from '../services/noteServices'
import { Chip } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
export class CreateLabelComponent extends Component {
  constructor() {
    super();
    this.state = {
     
    };
  }
  static navigationOptions = {
    drawerLabel: "Labels",
    drawerIcon: <Icon name="label-outline" size={25}/>
  };
  render() {
      return (
         <View >
        <Text>hai</Text>
          </View>
      )
      }
    }
export default CreateLabelComponent

