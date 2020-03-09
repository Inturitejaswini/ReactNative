import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    /**
     * login css
     */
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d6dbdf',
        display: 'flex'
    },
    cardContainer: {

    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        borderRadius: 8
    },
    Text: {
        width: 120,
        borderRadius: 10,
        fontSize: 20,
        marginLeft: 40,
        marginBottom: 30
    },
    btn: {
        width: 200,
        borderRadius: 10,
        top: 10
    },
    btn2: {
        width: 200,
        borderRadius: 10,
        top: 20
    },
    forgot: {
        width: 120,
        borderRadius: 10,
        top: 40,
        marginBottom: 30,
        marginLeft: 45
    },
    iconbtn: {
        fontSize: 3
    },
    accounticon1: {
        marginLeft: 80,
        width: 40,
        height: 40,
        marginTop: -20,
        marginBottom: 10,

    },
    /**
     * REGISTARTION CSS
     */
    registerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d6dbdf',
    },

    cardContainer1: {
        width: 400,
        height: 150
    },
    input1: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        borderRadius: 8
    },
    Text1: {
        width: 100,
        borderRadius: 10,
        fontSize: 20,
        marginLeft: 55,
        marginBottom: 10
    },
    registerbtn: {
        width: 200,
        borderRadius: 10,
        top: 5
    },
    loginbtn: {
        width: 200,
        borderRadius: 10,
        top: 12
    },
    /**
     * forgot password css
     */
    forgotContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d6dbdf',
    },
    input3: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        borderRadius: 8
    },
    forgotbtn1: {
        width: 200,
        borderRadius: 10,
        top: 10
    },
    Text3: {
        width: 130,
        borderRadius: 10,
        fontSize: 20,
        marginBottom: 30,
        marginLeft: 40
    },
    forgotbtn2: {
        width: 200,
        borderRadius: 10,
        top: 20,
        fontSize: 3
    },
    /**
     * dashboard component app.css
     */
    cardText: {
        fontSize: 30,
        left: 26
    },
    input4: {
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
        elevation: 5,
        height: 50,
        position:'absolute'
      },
      input5: {
        width: "50%",
        flexDirection: "row",
        margin: 15,
        justifyContent: "space-between"
      },
    dashboardContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between"
      },
    Icon: {
        left: 130

    },
    menuitem: {
        marginLeft: 5
    },
    keepicon: {
        marginLeft: 5,
        height: 30,
        width: 20

    },
    appicons: {
        // flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        top:-10
    },
    fundooText: {
        marginLeft: 5
    },
    searchicon: {
        marginLeft: 40
    },
    grid: {
        right: -20,
        top: -1,

    },
    accounticon: {
        marginLeft: 60,
    },
    input4: {
        // top: 580,
        backgroundColor: '#fbfcfc',
        // boxshadow:'0 0 15',
        // borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        right: 10
    },
    input5: {
        top: -5,
        backgroundColor: '#fbfcfc',
        // boxshadow:'0 0 15',
        // borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        right: 8
    },
    
    /**
     *notes app.css  
     * */
    gobackicon: {
        width: 20,
        marginTop: 10,
        marginLeft: 20
    },
    plusicon: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 420

    },
    icons: {
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: -20,
        marginLeft: 70
    },
    deleteicons: {
        flex: 2,
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    icon: {
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        flexDirection: 'column',
    },
    iconText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        marginLeft: -170,
    },
    iconText1: {
        marginLeft: 30
    },
    textinput: {
        marginLeft: 20,
        marginTop: 20
    },
    /**
     * getnote component css
     */
    getcard: {
        marginTop: 60,
        marginBottom: -60,
        borderRadius: 10
    },
    getNoteCard: {
        // flexDirection: "row",
        justifyContent: "space-between",
        // flexWrap: "wrap"
    },
    /**
     * editcomponent css
     */
    editIcons: {
        flex: 1,
        flexDirection: "row",
        justifyContent:'space-around'
        // justifyContent: "space-between"
      },
      noteData: {
        left: 10
      },
});
export default styles