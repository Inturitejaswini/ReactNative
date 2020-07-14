import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ProgressBarAndroid,
} from 'react-native';
import {ViewStreamIcon} from 'react-native-vector-icons/MaterialCommunityIcons';
import {LargeIcon} from 'react-native-vector-icons/FontAwesome';
import {ArchiveIcon} from 'react-native-vector-icons/Foundation';
import {Card} from 'react-native-elements';
import styles from '../Styles';
import {getNotes} from '../services/noteServices';
import {DrawerActions} from 'react-navigation-drawer';

export class ArchiveComponent extends Component {
  constructor() {
    super();
    this.state = {
      listOpen: false,
      notes: [],
    };
  }
  static navigationOptions = {
    drawerLabel: 'Archive',
    drawerIcon: <ArchiveIcon name="archive" size={20} />,
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
      if (key.isArchived == true) {
        return (
          <View style={Align}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('editArchive', {
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
          </View>
        );
      }
    });
    let pinNoteDetails = this.state.notes.map((key) => {
      if (
        key.isPined == true &&
        key.isDeleted !== true &&
        key.isArchived == true
      ) {
        return (
          <View style={Align}>
            <ScrollView>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('editArchive', {
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
                  <Text>{key.label}</Text>
                </Card>
              </TouchableOpacity>
            </ScrollView>
          </View>
        );
      }
    });
    return (
      <ScrollView>
        <Card>
          <View style={styles.archivedrawer}>
            <View style={styles.archivedrawer1}>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.dispatch(DrawerActions.openDrawer())
                  }>
                  <Image source={require('../assets/menuicon.png')}></Image>
                </TouchableOpacity>
              </View>
              <View>
                <Text>Archive</Text>
              </View>
            </View>
            <View style={styles.archivesearchicon}>
              <View style={styles.archive}>
                <Image source={require('../assets/searchicon.png')}></Image>
              </View>
              <View style={styles.archivegrid}>
                {!this.state.listOpen ? (
                  <TouchableOpacity>
                    <ViewStreamIcon
                      name="view-stream"
                      size={32}
                      onPress={() => {
                        this.handleGridView();
                      }}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity>
                    <LargeIcon
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
        {noteDetails.length > 0 ? (
          <View>
            <View style={styles.getNoteCard}>{pinNoteDetails}</View>
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
    );
  }
}
export default ArchiveComponent;
