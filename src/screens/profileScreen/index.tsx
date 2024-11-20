import { Alert, Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../assets';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const ProfileScreen = ({ navigation }: { navigation: any }) => {
    const [name, setName] = useState('');
    const [numQues, setNumQues] = useState(0);
    const [level, setLevel] = useState(0);
    const onNameChange = (text: string) => {
        setName(text);
    }
    const onLevelChange = (text: string) => {
        setLevel(parseInt(text));
    }
    const onNumQues = (text: string) => {
        setNumQues(parseInt(text));
    }

    const onSubmit = () => {
        if (name.trim() != '' && level <= 3 && level >= 1 && numQues>0) {

            Alert.alert("Successfully Saved!");
            navigation.navigate('HomeScreen', { userName: name, diffLevel: level, numQues: numQues });
        }

    }
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image
                    source={images.header2}
                    style={styles.header}
                />
            </View>
            <TextInput
                placeholder='Your Full Name'
                placeholderTextColor={'black'}
                style={styles.textInput}
                onChangeText={(text) => onNameChange(text)}
            />
            <TextInput
                placeholder='Enter Level e.g. 1,2,3'
                placeholderTextColor={'black'}
                keyboardType='numeric'
                onChangeText={(text) => onLevelChange(text)}
                style={styles.textInput}
                onSubmitEditing={onSubmit}
            />
            <TextInput
                placeholder='Number of Questions'
                placeholderTextColor={'black'}
                keyboardType='numeric'
                onChangeText={(text) => onNumQues(text)}
                style={styles.textInput}
                onSubmitEditing={onSubmit}
            />
            <TouchableOpacity style={styles.button} onPress={onSubmit}>
                <Text style={styles.buttonTxt}>
                    Let's Start
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ProfileScreen

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