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
    fundootext: {
        fontSize: 20
    },
    progress: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        marginTop: 200
    },
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
        position: 'absolute'
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
        // marginLeft: 5
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        // bottom:30
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
        top: -10
    },
    fundooText: {
        left: 5
    },
    searchicon: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        left: -6
    },
    search: {
        right: 15,
        // top: -1,

    },
    grid: {
        // marginLeft: 60,
        right: 7
    },
    input4: {
        backgroundColor: '#fbfcfc',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        right: 0,
        flex: 1,
        position: 'absolute',

    },
    input5: {
        top: -5,
        backgroundColor: '#fbfcfc',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // right: 8,
    },
    cardCss: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    fundooText: {
        fontSize: 20,
        right: -1,
        top: -4
    },
    carddetails: {
        left: 25,
        fontWeight: "bold",
        top: 10
    },
    notecarddetails: {
        left: 25,
        fontWeight: "bold",
        top: 10
    },
    /**
     * search css
     */
    textinput: {
        height: 40,
        fontSize: 18,
        right: 20,
        top: -10
    },


    /**
     * reminder css
     */
    reminderinput: {
        backgroundColor: '#fbfcfc',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        right: 0,
        flex: 1,
        position: 'absolute',
    },
    reminderinput5: {
        top: -5,
        backgroundColor: '#fbfcfc',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    remindertext: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    remindersearch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: -8
    },
    remindersearch1: {
        right: 30
    },
    reminder:{
        fontSize: 30, 
        top: -10
    },
    drawerReminder:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
    getReminderCard:{
        height: 50,
        borderRadius: 10
    },
    /**
     * getarchivenote css
     */
    archivegrid: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    archivedrawer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    archivedrawer1: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    archivesearchicon: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        bottom: 10
    },
    archive: {
        right: 30
    },
    /**
     * gettrashnote css
     */
    trashdrawer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    deleteText:{
        fontSize: 18, 
        left: 39, 
        top: -20
    },
    delete1:{
        flexDirection: "row",
         top: 20 
    },
    delete: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    trashgrid: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    deletesearchicon: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        top: -5
    },
    deletesearchicon1: {
        top: -5,
        right: 30
    },
    /**
     *notes app.css  
     * */
    gobackicon: {
        width: 20,
        marginTop: 10,
        marginLeft: 20
    },
    rbsheet1:{
        justifyContent: 'space-between', 
        flexDirection: 'row', 
        marginTop: 400
    },
    chip: {
        width: 120
    },
    icons: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginTop: -20,
        left: 10,
        right: 60
    },
    icons1: {
        left: 20
    },
    icons2: {
        left: 40
    },
    deleteicons: {
        flex: 2,
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'space-between',
        left: 9
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
    getNoteCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },
    /**
     * editcomponent css
     */
    editIcons: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-around',
        right: 10
        // justifyContent: "space-between"
    },
    noteData: {
        left: 10
    },
    listAlign: {
        width: "100%"
    },
    gridAlign: {
        width: "50%"
    },
    /**
     * collaborator css
     */
    savebtn: {
        fontWeight: "bold",
        fontSize: 20,
        right: 15,
        top: 7
    },
    collaboratortext: {
        top: 7,
        fontSize: 19,
        right: 60
    },
    accounticon: {
        flexDirection: "row",
        top: 30,
        left: 20
    },
    mailtext: {
        fontWeight: "bold",
        margin: 15,
        fontSize: 17
    },
    accountcircle: {
        flexDirection: "row",
        top: 35,
        left: 20
    },
    collaboratorcontainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 7
    },
    Textinput: {
        fontSize: 18,
        left: 10
    },
    /**
     * editlabel
     */
    editlabeltext: {
        top: 7,
        fontSize: 19,
        // right: -20
        left: -180
    },
    crossicon: {
        left: 15,
    },
    editTextinput: {
        fontSize: 18,
        fontWeight: "bold",
        left: -27,
        top: -2
    },
    doneicon: {
        left: -8,
    },
    editcrossicon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    /**
     * search component css
     */
    searchcard: {
        width: 150,
        top: 20,
        height: 150,
        left: 10,
        backgroundColor: '#0000FF'
    },
    bell: {
        color: '#FFFFFF',
        fontSize: 30,
        left: 55,
        top: 55
    },
    bellText: {
        color: '#FFFFFF',
        fontSize: 15,
        left: 40,
        top: 65
    },
    checklist: {
        color: '#FFFFFF',
        fontSize: 30,
        left: 55,
        top: 55
    },
    checklisttext: {
        color: '#FFFFFF',
        fontSize: 15,
        left: 47,
        top: 65
    },
    listcard: {
        width: 150,
        top: 20,
        height: 150,
        left: 10,
        backgroundColor: '#0000FF'
    },
    cards: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        // flexWrap: "wrap", 
    },
    typetext: {
        top: 10,
        left: 10
    },
    labeltext: {
        flex: 1,
        top: 25,
        left: 10
    },
    labelcard: {
        width: 150,
        top: 45,
        height: 150,
        left: 30,
        backgroundColor: '#999999'
    },
    labelicon: {
        color: '#FFFFFF',
        fontSize: 30,
        left: 55,
        top: 55
    },
    labeltext1: {
        color: '#FFFFFF',
        fontSize: 15,
        left: 53,
        top: 65
    },
    selectedLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    labeltext2: {
        right: 150
    },
    done: {
        flexDirection: 'row',
        // right:-50,
        justifyContent: 'space-between'
    },
    divider: {
        height: 2
    },
    labelText: {
        // right: 280,
        position: 'absolute',
        left: 30,
        top: 2
    },
    createLabel1:{
        fontWeight: "800",
         fontSize: 15 
    },
    height:{
        height: 2
    },
    labels:{
        fontSize: 18, 
        left: 40, 
        bottom: 25 
    },
    labelIcon:{
        flexDirection: "row",
        top: 10
    },
    collaboratorIcon:{
        flexDirection: "row",
        top: 20 
    },
    send:{
        fontSize: 18, 
        left: 20 
    },
    progress:{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        marginTop: 200
    },
    /**
     * label componnt css
     */
    labels: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center'
    },
    labeltex: {
        right: 100,
        alignContent: 'stretch'
    },
    labelcheckbox: {
        // right: 30
        width: '100%'
    },
    labeledit: {
        right: 30,
        fontSize: 20
    },
    labelchip: {
        width: 100
    },
    labelArrow: {
        flexDirection: "row",
        margin: 10
    },
    labelTextinput: {
        height: 40,
        fontSize: 18,
        left: 30,
        marginTop: -3
    },
    done: {
        left: 150
    },
    allowLeft: {
        flexDirection: "row",
        margin: 10
    },
    title: {
        height: 60,
        fontSize: 22,
        left: 20
    },
    note: {
        marginTop: -10,
        left: 23
    },
    elipsis: {
        top: 400,
        left: 340
    },
    restore: {
        fontSize: 18,
        left: 38,
        top: -20
    },
    deleteForever: {
        flexDirection: "row",
        left: 10,
    },
    deleteForeverText:{
        fontSize: 18, 
        left: 40,
        top:-20
    },
    colorBtn:{
        marginTop: 10
    },
    hexaColor:{
        backgroundColor: item.hexcode,
         borderRadius: 15 
    },
    labelData1:{
        fontWeight: "bold"
    },
    labelDetails:{
        flexDirection: "column"
    },
    getNoteTitle:{
        fontWeight: "bold"
    },
    getNoteReminder:{
        fontWeight: "bold" 
    },
    /**
     * search component css
     */
    searchInput:{
        height: 40, 
        fontSize: 20, 
        right: -20
    },
    searchView:{
        flexDirection: "row", 
        alignItems: 'center'
    },
    deleteIcon:{
        flexDirection: "row",
        left: 10,
        marginTop: 18
    },
    trashCard:{
        height: 50, 
        borderRadius: 10
    }

});
export default styles