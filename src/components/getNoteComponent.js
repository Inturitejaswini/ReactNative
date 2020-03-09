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
      open: false,
      listOpen:false
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
    let Align = this.props.listOpen ? styles.gridAlign : styles.listAlign;
    let noteDetails = this.state.notes.map(key => {
      // let notes=key.data;
      return (
         <View style={Align}>
          <ScrollView>
          <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("editComponent", {
                    display: key,
                    key: key.id
                  })}>
            <Card >
              <View>
                <Text style={{ fontWeight: "bold" }}>{key.title}</Text>
                <Text>{key.description}</Text>
                <Text style={{ fontWeight: "bold" }}>{key.reminder}</Text>
              </View>
            </Card>
            </TouchableOpacity>
          </ScrollView>
          </View>
      );
    });
    return (
      <View style={styles.getNoteCard}>{noteDetails}</View>
    );
  }
}
export default GetNoteComponent

