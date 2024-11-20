import { Dimensions, StyleSheet } from "react-native";

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    answer: {
        alignItems: 'center',
        margin: 10,
    },
    textAns: {
        fontSize: 20,
        margin: 5,
    },
    textAns1: {
        fontSize: 20,
        margin: 5,
        color: 'green'
    },
    textAns2: {
        fontSize: 20,
        margin: 5,
        color: 'red',
    },
    proftext: {
        color: 'black',
        fontSize: 20,
    },
    profImage: {
        height: 50,
        width: 50,
        marginRight: 10,
    },
    profile: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTxt: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#173cb0',
        height: SCREEN_HEIGHT * .04,
        width: SCREEN_WIDTH * .7,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
        margin: 10,
        padding: 10,


    },
    optText: {
        fontSize: 20,
        fontWeight: '500'
    },
    options: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        backgroundColor: '#c7d0ec',
        borderRadius: 20,
        paddingLeft: 20,
        width: SCREEN_WIDTH * .6,
        height: SCREEN_HEIGHT * 0.04,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        margin: 10,

    },
    sum: {
        fontSize: 23,
        fontWeight: 'bold',
        alignSelf: 'center',
        margin: 10,

    },
    quesNo: {
        fontSize: 18,
        fontWeight: '500',
        margin: 8,
        marginLeft: 1,
    },
    question: {
        marginVertical: SCREEN_HEIGHT * 0.05,
        backgroundColor: 'white',
        width: SCREEN_WIDTH * .8,
        borderRadius: 20,
        alignSelf: 'center',
        padding: 20,
        //alignItems:'center',


    },
    header: {
        resizeMode: 'contain',
        borderRadius: 15,
        margin: 15,
        padding: 10,
        alignSelf: 'center',
        height: SCREEN_HEIGHT * 0.09,
        width: SCREEN_WIDTH * .8,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        backgroundColor: '#c7d0ec',

    },
})