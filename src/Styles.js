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
        display:'flex'
    },
    snackbar:{

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
    top: {
        position: 'absolute',
        left: 10,
        right: 10,
        backgroundColor: '#fbfcfc',
        borderRadius: 10,
        top: 15,
    },
    menuitem: {
        marginLeft: 5
    },
    keepicon: {
        marginLeft: 5,
        height: 30,
        width: 20

    },
    fundooText: {
        marginLeft: 5
    },
    searchicon: {
        marginLeft: 30
    },
    gridicon: {
        marginLeft: 30
    },
    accounticon: {
        marginLeft: 50,
        width: 40,
        height: 40
    },
    //   bottom: {
    //     position: 'absolute',
    //     left: 10,
    //     right: 10,
    //     backgroundColor:'#fbfcfc',
    //     borderRadius:10,
    //     bottom:40,
    //     marginBottom:100
    //   },
    input4: {
        top: 560,
        backgroundColor: '#fbfcfc',
        // boxshadow:'0 0 15',
        borderRadius: 8,
    },
    checkicon: {
        marginLeft: 25,
        width: 20,
        height: 20
    },
    brushicon: {
        marginLeft: 25
    },
    imageicon: {
        marginLeft: 25

    },
    voiceicon: {
        marginLeft: 25

    },
    /**
     *notes app.css  
     * */

    gobackicon: {
        width: 20,
        marginTop: 10,
        marginLeft: 8
    },
    pushpinicon: {
        width: 25,
        height: 25,
        marginLeft: 210,
        marginTop: -20

    },
    alerticon: {
        marginLeft: 270,
        marginTop: -25,
        width: 20,
    },
    archiveicon: {
        marginLeft: 320,
        marginTop: -25,
        width: 20,
    },
    moreicon: {
        marginLeft: 320,
        marginTop: 440,

    },
    boxicon: {
        marginTop: 450,
        marginLeft: 20
    },
    menupaper: {
        marginTop: 40,
        width: 300,
    },
    textinput: {
        marginLeft: 20,
        fontSize: 20,
        marginTop: 4
    },
    textinput1: {
        marginLeft: 20,
        fontSize: 15

    },
    deleteicons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 120,
        fontSize: 20
    },
    deleteText: {
        marginLeft: 20,
        fontSize: 20
    },
    deleteicon: {
        marginLeft: 25,
    },
    copyicons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'flex-start',
        marginTop: 25
    },
    copyText: {
        marginLeft: 20,
        fontSize: 20
    },
    copy: {
        marginLeft: 20,
    },
    sendicons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 20,
        marginTop: 25
    },
    sendText: {
        marginLeft: 20,
        fontSize: 20
    },
    send: {
        marginLeft: 25,
    },
    addpersonicons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 20,
        marginTop: 25
        // marginRight: 200,
    },
    collabaratorText: {
        marginLeft: 20,
        fontSize: 20
    },
    collabator: {
        marginLeft: 25,
    },
    labelicons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 20,
        marginTop: 25
        // marginRight: 200,  
    },
    labelText: {
        marginLeft: 20,
        fontSize: 20
    },
    label: {
        marginLeft: 25,
    },
    moreicons: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginRight: 230,
        marginBottom: 160,
        // marginflexstart:20
    }
});
export default styles