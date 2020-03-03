import React, { Component } from "react";
import {
  View,
  ScrollView,
  DatePickerIOS,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet
} from "react-native";
import FAIcon from "react-native-vector-icons/FontAwesome";
import MDIcon from "react-native-vector-icons/MaterialIcons";
import RBSheet from "react-native-raw-bottom-sheet";
import data from "./static.json";

FAIcon.loadFont();
MDIcon.loadFont();

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>REACT NATIVE RAW BOTTOMSHEET</Text>

        {/* TextInput */}
        <RBSheet
          ref={ref => {
            this.Input = ref;
          }}
          height={60}
          animationType="none"
          duration={200}
          customStyles={{
            wrapper: { backgroundColor: "#fff" }}}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} autoFocus placeholder="Write a comment..." />
          </View>
        </RBSheet>
      </View>
    );
  }
}
export default App
