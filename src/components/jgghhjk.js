import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  AsyncStorage,
  Image,
  ImageBackground
} from "react-native";
import { Card } from "react-native-elements";
import styles from "../style";
import { Button } from "react-native-elements";
import { loginData } from "../services/userServices";
import { TextField } from "react-native-material-textfield";
import image from "../assets/darkblue.jpeg";
import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import { getUser } from "../services/userServices";
// import { log } from "util";
import Snackbar from "react-native-snackbar-component";
export default class LoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      snackIsVisible: false
    };
  }
  formatText = text => {
    return text.replace(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  };
  // componentDidMount() {
  //   this.getUser();
  // }
  handleSignin = async () => {
    getUser(this.state.email);
    if (this.state.email === "") {
      this.setState({
        snackIsVisible: !this.state.snackIsVisible
      });
    } else if (this.state.password === "") {
      this.setState({
        snackIsVisible: !this.state.snackIsVisible
      });
    } else {
      let data = {
        email: this.state.email,
        password: this.state.password
      };
      console.log("data in signin", data);

      loginData(data);
      // AsyncStorage.setItem( lastName);
      // AsyncStorage.setItem("email", email);
      // });
      this.props.navigation.navigate("Dashboard");
    }
  };
  render() {
    return (
      <View style={styles.containerB}>
        <ImageBackground style={styles.backgroundImage} source={image}>
          <Text style={styles.textstyle}>Fundoo Account</Text>
          <Card containerStyle={styles.loginCircle}>
            <Icon1 style={styles.accountIcon} name="account-circle" size={40} />
          </Card>
          <ScrollView style={styles.logoContainer}>
            <Card>
              {/* <Text style={styles.textalign}>LOGIN</Text> */}
              <View>
                <View style={{ top: 35 }}>
                  <Icon1 name="account-outline" size={22} color="gray" />
                </View>
                <View style={{ left: 25, top: -20, width: "90%" }}>
                  <TextField
                    name="email"
                    label="Email"
                    type="text"
                    keyboardType="email-address"
                    // formatText={this.formatText}
                    // onSubmitEditing={this.onSubmit}
                    // ref={this.fieldRef}
                    onChangeText={email => this.setState({ email })}
                  />
                </View>
              </View>
              <View>
                <View style={{ top: 20 }}>
                  <Icon name="lock1" size={22} />
                </View>
                <View style={{ left: 25, top: -35, width: "90%" }}>
                  <TextField
                    type="password"
                    name="password"
                    label="password"
                    keyboardType="default"
                    secureTextEntry
                    onChangeText={password => this.setState({ password })}
                  />
                </View>
              </View>
              <View style={{ top: -10 }}>
                <Button
                  title="Signin"
                  onPress={() => {
                    this.handleSignin();
                  }}
                />
              </View>
              <Button
                title="Forgot Password"
                type="clear"
                onPress={() => this.props.navigation.navigate("ForgotPassword")}
              />
              <Button
                title="Create Account"
                type="clear"
                onPress={() => this.props.navigation.navigate("Register")}
              />
              <Snackbar
                visible={this.state.snackIsVisible}
                //SnackBar visibility control
                textMessage="enter the requirements"
                //Text on SnackBar
                actionHandler={() => {
                  //function called while clicking on action Text
                  alert("fill the curect email and password");
                  //After handling click making snackBar invisible
                  this.setState({
                    snackIsVisible: !this.state.snackIsVisible
                  });
                }}
                actionText="let's go"
                //action Text to print on SnackBar
                distanceCallback={distance => {
                  //Number indicating distance taken up by snackbar
                  this.setState({ distance: distance });
                }}
              />
            </Card>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}










import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  ImageBackground
} from "react-native";
import { Card } from "react-native-elements";
import styles from "../style";
import { Button } from "react-native-elements";
import { OutlinedTextField } from "react-native-material-textfield";
import firebase from "firebase";
import { registerData } from "../services/userServices";
import Snackbar from "react-native-snackbar-component";
import image from "../assets/spark.jpeg";
export default class RegisterComponent extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      snackIsVisible: false
    };
    // console.disableYellowBox=false
  }
  formatText = text => {
    return text.replace(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  };
  handleSignup = () => {
    if (this.state.firstName === "") {
      this.setState({
        snackIsVisible: !this.state.snackIsVisible
      });
    } else if (this.state.lastName === "") {
      this.setState({
        snackIsVisible: !this.state.snackIsVisible
      });
    } else if (this.state.email === "") {
      this.setState({
        snackIsVisible: !this.state.snackIsVisible
      });
    } else if (this.state.password === "") {
      this.setState({
        snackIsVisible: !this.state.snackIsVisible
      });
    } else {
      let data = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      };
      console.warn("res in data", data);
      registerData(data);
      // .then(data=>{
      //   console.log("response in register data",data);
      // })
      this.props.navigation.navigate("Login");
    }
  };
  render() {
    // console.warn("responce",value);
    return (
      <View style={styles.containerB}>
        <ImageBackground style={styles.backgroundImage} source={image}>
          <ScrollView style={styles.RegisterContainer}>
            <Text style={styles.registerStyle}>Registration</Text>

            <Text style={styles.textalignR}>Create Fundoo Account</Text>
            <OutlinedTextField
              name="FirstName"
              label="FirstName"
              type="text"
              baseColor="white"
              keyboardType="default"
              value={this.state.firstName}
              onChangeText={firstName => this.setState({ firstName })}
            />
            <OutlinedTextField
              name="LastName"
              label="LastName"
              type="text"
              baseColor="white"
              keyboardType="default"
              value={this.state.lastName}
              onChangeText={lastName => this.setState({ lastName })}
            />
            <OutlinedTextField
              name="Email"
              label="Email"
              type="text"
              baseColor="white"
              keyboardType="email-address"
              // formatText={this.formatText}
              // onSubmitEditing={this.onSubmit}
              // ref={this.fieldRef}
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
            <OutlinedTextField
              type="password"
              name="password"
              label="password"
              baseColor="white"
              keyboardType="default"
              secureTextEntry
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
            <Button
              title="SignUp"
              onPress={() => {
                this.handleSignup();
              }}
            />
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 19,
                fontWeight: "500",
                top: 5
              }}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              Signin Instead
            </Text>
            {/* <Button
              title="Signin Instead"
              type="clear"
              baseColor="white"
              
            /> */}
            <Snackbar
              style={styles.snackbarCss}
              visible={this.state.snackIsVisible}
              //SnackBar visibility control
              textMessage="enter the requirements"
              //Text on SnackBar
              actionHandler={() => {
                //function called while clicking on action Text
                alert("fill all the details of registration");
                //After handling click making snackBar invisible
                this.setState({
                  snackIsVisible: !this.state.snackIsVisible
                });
              }}
              actionText="let's go"
              //action Text to print on SnackBar
              distanceCallback={distance => {
                //Number indicating distance taken up by snackbar
                this.setState({ distance: distance });
              }}
            />
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}





// import { EventEmitter }  from "react-native-eventemitter";
import firebase from "firebase";
import firebaseData from "../config/firebaseConfig";
// import signoutComponent from "../components/signoutComponent";
import jwt from "react-native-pure-jwt";
// import RNFetchBlob from "react-native-fetch-blob";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";
const db = firebaseData.firestore();
const storage = firebaseData.storage();
const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;
export async function registerData(data) {
  console.log("user details", data);
  await firebaseData
    .auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    .then(response => {
      console.log("response", response);
    });
  let currentUser = await firebaseData.auth().currentUser.uid;
  console.log("currentUser", currentUser);
  await db
    .collection("users")
    .doc(currentUser)
    .set(data);
  firebaseData.auth().currentUser.sendEmailVerification();
  //  const emitter = new EventEmitter();
  //  function emailVerification() {
  //   //  console.log("mail is verified");
  //    firebaseData.auth().currentUser.sendEmailVerification()
  //  }
  // emitter.on('email verification', emailVerification);
  // let emailResult=emitter.emit('email verification');
  // console.log("email verified");
  // return emailResult
}
/**************signin service data************ */

export async function loginData(data) {
  // console.log("login details", data);
  let dataaaaaa = await firebaseData
    .auth()
    .signInWithEmailAndPassword(data.email, data.password);
  console.log("login is done", dataaaaaa.user.email);
  let currentUser = await firebaseData.auth().currentUser.uid;
  console.log("currentUser", currentUser);
  let userDetails = await db.collection("users").doc(currentUser);
  console.log("login is done", userDetails);
  var loginDetails;
  userDetails.get().then(async function(doc) {
    console.log("set details", doc.data().firstName, doc.data().lastName);
    const payload = {
      email: firebaseData.auth().currentUser.email,
      firstName: doc.data().firstName,
      lastName: doc.data().lastName,
      userId: firebaseData.auth().currentUser.uid
    };
    let token = await jwt.sign(payload, firebaseData.auth().currentUser.uid, {
      expiresIn: 1440
    });
    console.log("token in login ", token);
    let tokenDetails = await AsyncStorage.setItem("token", token);
    tokenDetails.then(res => {
      console.log(res);
    });
    console.log("vvgh", doc.data());
    // loginDetails.push(
    //   doc.data().firstName,
    //   doc.data().lastName,
    //   doc.data().email
    // );
    loginDetails = doc.data();
    console.log("set details--->", loginDetails);
    // let details = await AsyncStorage.setItem("data", loginDetails[0].email);
    // console.log("details----->", details);
  });
  return loginDetails;
}
export async function getUser(data) {
  console.log("emailinformatio---->", data);
  await db
    .collection("users")
    .where("email", "==", data)
    .get()
    .then(res => {
      res.forEach(async login => {
        console.warn(" ====> ", login.data().lastName);
        let mailData = await login.data().lastName;
        console.warn("vghggggggg", mailData);
        // let email = AsyncStorage.setItem("mail", login.data().email);
        // console.warn("email----->", email);
        // AsyncStorage.setItem("firstName", login.data().firstName);
        AsyncStorage.setItem("lastName", mailData);
        await console.log(AsyncStorage.getItem("lastName"));
      });
    });
}
/**************forgot password service data************ */
export async function forgotPasswordData(data) {
  console.log("email details", data);
  await firebaseData.auth().sendPasswordResetEmail(data.email);
  console.log("forgotPassword reset email");
}
/*******************signout *************************/
export async function userSignOut() {
  await firebaseData
    .auth()
    .signOut()
    .then(res => {
      console.log("signout response", res);
    });
}

export async function profileUpload(uri) {
  // console.warn("uri=====>", uri);
  var imageStore = await RNFetchBlob.wrap(uri);
  // console.warn("imagestore", imageStore);
  let loginUser = await firebaseData.auth().currentUser.email;
  console.warn("email======>", loginUser);
  var storageRef = await firebaseData.storage().ref(loginUser + "/images");
  // console.warn("storageeeee--->", storageRef);
  var upload = null;
  Blob.build(imageStore, { type: "image/jpeg" }).then(imageRes => {
    upload = imageRes;
    return storageRef.put(upload, { contentType: "image/jpeg" });
    // console.warn("result---->", result);
    // return result;
  });
  uploadData();
}
// export async function uploadData() {
//   let loginUser = await firebaseData.auth().currentUser.email;
//   // console.warn("email in download function", loginUser);
//   var storageRef = firebase.storage().ref(loginUser + "/images");
//   // console.warn("storageeeee in download function", storageRef);
//   var download = null;
//   var getImageUri = await storageRef.getDownloadURL().then(function(uri) {
//     console.log(uri);
//     download = uri;
//     console.warn("after download--->", download);
//   });
//   setImage(download);
// }
// export async function setImage(download) {
//   console.warn("dowmload in setImage", download);
//   let loginUser = await firebaseData.auth().currentUser.uid;
//   console.warn("email in download function", loginUser);
//   let data = {
//     image: download
//   };
//   console.warn("dowmload in setImage---->", data);
//   let pic = await db
//     .collection("users")
//     // .where("email", "==", loginUser)
//     .doc(loginUser)
//     .update(download);
//   console.log("pic------>", pic);

// .then(res => {
//   res.forEach(imageData => {
//     console.warn("imageData in services", imageData.data());
//     console.warn("imageData in id", imageData.id);
//     var key = imageData.id;
//     var info = imageData.data();
//     console.warn(download, key, info);
//   });
// });
// }
// await db
//   .collection("notes")
//   .doc(data.key)
//   .update(data);





import firebaseData from "../config/firebaseConfig";
const db = firebaseData.firestore();

export async function createNotes(data) {
  // console.warn("email--->", firebaseData.auth().currentUser.email);
  console.log("note data in services", data);
  let noteData = {
    title: data.title,
    description: data.description,
    currentUser: firebaseData.auth().currentUser.email,
    archived: data.archive,
    pined: data.pined,
    color: data.color,
    reminder: data.reminder,
    delete: data.delete,
    collaborator: data.collaborator,
    label: data.label
  };
  console.log("note data in services------->", noteData);
  try {
    let res;
    await db
      .collection("notes")
      .add(noteData)
      .then(response => {
        console.log("Document ", response.id);
        res = response;
      });
    return res;
  } catch (error) {
    console.log(error);
  }
}
export async function getNotes() {
  // console.log("note data in get note services",data);
  let note = [];
  await db
    .collection("notes")
    .get()
    .then(res => {
      res.forEach(noteData => {
        // console.warn("noteData in services", noteData.data());
        note.push(noteData);
      });
      //  console.log("returned data",note);
    });
  return note;
}

export async function archiveNotes(data) {
  console.log("data in archive notes", data);
  try {
    if (data.archive == false) {
      data.archive = true;
    } else {
      data.archive = false;
    }
    await db
      .collection("notes")
      .doc(data.key)
      .update(data);
    // .then(response => {
    //   console.log("Document", response);
    //   res = response;
    // });
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function updateColor(data) {
  console.log("data about color", data);
  let colorData = {
    color: data.updateColor
  };
  await db
    .collection("notes")
    .doc(data.key)
    .update(colorData);
  return colorData;
  data;
}
export async function deleteNotes(data) {
  console.log("data about deleteNotes", data);
  if (data.delete == false) {
    data.delete = true;
  } else {
    data.delete = false;
  }
  await db
    .collection("notes")
    .doc(data.key)
    .update(data);
  console.log("-----------", data);
  return data;
}
export async function editNotes(data) {
  console.log("data about editNotes", data);
  let editData = {
    title: data.title,
    description: data.description,
    key: data.key,
    color: data.color,
    archive: data.archive,
    delete: data.delete,
    reminder: data.reminder,
    collaborator: data.collaborator,
    label: data.labelValue
  };
  console.log("dataaaaaaaaaaaaaaaa", editData);
  await db
    .collection("notes")
    .doc(data.key)
    .update(editData);

  console.log("data-----------", editData);
  return editData;
}
export async function createLabels(data) {
  // console.log("note data in services", data);
  try {
    let res;
    await db
      .collection("labels")
      .add(data)
      .then(response => {
        console.log("Document ", response.id);
        res = response.id;
      });
    console.log("hgfhghjg", res);

    return res;
  } catch (error) {
    console.log(error);
  }
}
export async function getLabels() {
  // console.log("note data in get note services", data);
  let label = [];
  await db
    .collection("labels")
    .get()
    .then(res => {
      res.forEach(labelData => {
        console.warn("noteData in services", labelData);
        label.push(labelData);
      });
      console.log("returned data", label);
    });
  return label;
}
export async function collaborateMail() {
  let email = [];
  await db
    .collection("users")
    .get()
    .then(res => {
      res.forEach(mail => {
        // console.warn("noteData in services", mail.data());
        email.push(mail);
      });
      console.log("returned data", email);
    });
  return email;
}
export async function collaborateNote(data) {
  // console.log("note data in get note services", data);
  let email = [];
  await db
    .collection("users")
    .where("email", "==", data.selectedMail)
    .get()
    .then(res => {
      res.forEach(mailData => {
        console.warn(mailData.id, " ====> ", mailData.data());
        email.push(mailData.data());
      });
      console.log("returned data", email);
    });
  return email;
}
export async function deleteForever(data) {
  console.log("note data in get note services", data);
  await db
    .collection("notes")
    .doc(data.key)
    .delete()
    .then(res => {
      console.warn("responce------>", res);
    });
  return res;
}
