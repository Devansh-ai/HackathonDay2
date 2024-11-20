import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

const AnswerScreen = () => {
    const route = useRoute();
    const { numQues, correct } = route.params as { numQues: number, correct: number }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>
                Congratulations
            </Text>
            <Text style={styles.header1}>

                You Have Successfully Completed
            </Text>
            <Text style={styles.text}>Total
                {numQues}
            </Text>
            <Text style={styles.text}>Correct
                {correct}
            </Text>
            <Text style={styles.text}>Incorrect
                {numQues - correct}
            </Text>

        </SafeAreaView>
    )
}

export default AnswerScreen

