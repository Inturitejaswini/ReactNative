import React, { Component } from "react";
import { ScrollView, Text, View, TouchableOpacity, Image } from "react-native";
import { Card } from "react-native-elements";
import styles from "../Styles";
import { getNotes } from '../services/noteServices'
export class GetNoteComponent extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      open: false,
      listOpen: false
    };
  }

  componentDidMount = () => {
    this.getAllNotes();
  }
  getAllNotes = () => {
    getNotes()
      .then(res => {
        this.setState({
          notes: res.data.data.data
        })
      })
    this.setState({
      open: false
    })
  }

  render() {
    let Align = this.state.listOpen ? styles.gridAlign : styles.listAlign;
    let noteDetails = this.state.notes.map(key => {
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
                  <Text style={styles.GetNoteTitle}>{key.title}</Text>
                  <Text>{key.description}</Text>
                  <Text style={styles.getNoteReminder}>{key.reminder}</Text>
                </View>
              </Card>
            </TouchableOpacity>
          </ScrollView>
        </View>
      );
    });
    return <View style={styles.getNoteCard}>{noteDetails}</View>
  }
}
export default GetNoteComponent

