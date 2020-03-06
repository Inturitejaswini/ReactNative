import React, { Component } from "react";
import { Image } from "react-native";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import styles from "../Styles";
import { getNotes } from '../services/noteServices'
import { Chip } from "react-native-paper";
export class GetNoteComponent extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      open: false
    };
  }
  // static navigationOptions = {
  //   drawerLabel: "Notes",
  //   drawerIcon: <Icon2 name="bulb1" size={20} />
  // };

  componentDidMount = () => {
    this.getAllNotes();
  }
  getAllNotes = () => {
    getNotes()
      .then(res => {
        this.setState({
          notes: res.data.data.data
        })
        console.log("getNote data ", this.state.notes)

      })
    this.setState({
      open: false
    })
  }
  render() {
    let noteDetails = this.state.notes.map(key => {
      // let notes=key.data;
      return (
        <View>
          <ScrollView>
          <Card style={styles.getcard}>
            <View>
              <Text>{key.title}</Text>
            <Text>{key.description}</Text>
            <Chip>{key.reminder}</Chip>
            </View>
          </Card>
          </ScrollView>
        </View>
      );
    });
    return (
      <View >{noteDetails}</View>
    );
  }
}
export default GetNoteComponent

