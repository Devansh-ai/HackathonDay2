import { Dimensions, StyleSheet } from "react-native";

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
    header: {
        resizeMode: 'contain',
        borderRadius: 15,
        margin: 15,

        alignSelf: 'center',
        height: SCREEN_HEIGHT * 0.07,
        width: SCREEN_WIDTH * .8,
        backgroundColor: 'white',
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
    textInput: {
        backgroundColor: 'white',
        borderRadius: 20,
        height: SCREEN_HEIGHT * 0.06,
        width: SCREEN_WIDTH * 0.9,
        alignSelf: 'center',
        padding: 10,
        margin: 10,
        fontSize: 18,
        color: 'black',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,

    },
    container: {
        flex: 1,
        backgroundColor: '#c7d0ec',

    }
})