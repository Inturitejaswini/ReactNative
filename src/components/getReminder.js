import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ProgressBarAndroid,
} from 'react-native';
import ReminderIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ThLargeIcon from 'react-native-vector-icons/FontAwesome';
import {Card} from 'react-native-elements';
import styles from '../Styles';
import {getNotes} from '../services/noteServices';
import {DrawerActions} from 'react-navigation-drawer';
export class ReminderComponent extends Component {
  constructor() {
    super();
    this.state = {
      listOpen: false,
      notes: [],
      reminder: [],
    };
  }
  static navigationOptions = {
    drawerLabel: 'Reminder',
    drawerIcon: (
      <ReminderIcon name="bell-plus-outline" size={20}></ReminderIcon>
    ),
  };
  componentDidMount() {
    getNotes().then((res) => {
      this.setState({
        notes: res.data.data.data,
      });
    });
  }
  handleGridView() {
    this.setState({
      listOpen: !this.state.listOpen,
    });
  }
  render() {
    let Align = this.state.listOpen ? styles.listAlign : styles.gridAlign;
    let noteDetails = this.state.notes.map((key) => {
      if (key.reminder.length !== 0) {
        return (
          <View style={Align}>
            <ScrollView>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('editReminder', {
                    display: key,
                    key: key.id,
                  })
                }>
                <Card
                  containerStyle={{
                    backgroundColor: key.color,
                  }}>
                  <Text> {key.title}</Text>
                  <Text> {key.description}</Text>
                  <Text> {key.reminder}</Text>
                </Card>
              </TouchableOpacity>
            </ScrollView>
          </View>
        );
      }
    });
    return (
      <View>
        <Card style={styles.getReminderCard}>
          <View style={styles.drawerReminder}>
            <View style={styles.remindertext}>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.dispatch(DrawerActions.openDrawer())
                  }>
                  <Image source={require('../assets/menuicon.png')}></Image>
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.reminder}>Reminder </Text>
              </View>
            </View>
            <View style={styles.remindersearch}>
              <View style={styles.remindersearch1}>
                <Image source={require('../assets/searchicon.png')}></Image>
              </View>
              <View>
                {!this.state.listOpen ? (
                  <TouchableOpacity>
                    <ReminderIcon
                      name="view-stream"
                      size={32}
                      onPress={() => {
                        this.handleGridView();
                      }}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity>
                    <ThLargeIcon
                      name="th-large"
                      size={25}
                      onPress={() => {
                        this.handleGridView();
                      }}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </Card>
        <ScrollView>
          {noteDetails.length > 0 ? (
            <View>
              <View style={styles.getNoteCard}>{noteDetails}</View>
            </View>
          ) : (
            <ProgressBarAndroid
              color="gray"
              progress={0.9}
              style={styles.progress}
            />
          )}
        </ScrollView>
      </View>
    );
  }
}
export default ReminderComponent;
