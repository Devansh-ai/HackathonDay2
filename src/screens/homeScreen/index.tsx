import { Alert, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icons, images } from '../../assets';
import { styles } from './styles';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const route = useRoute();
  const { userName, diffLevel, numQues } = route.params as { userName: string, diffLevel: number, numQues: number };
  const [randomNum1, setRandomNum1] = useState(0);
  const [randomNum2, setRandomNum2] = useState(0);
  const [count, setCount] = useState(0);
  const [correct, setCorrect] = useState(0);
  const operator = ['+', '-', '*', '/'];
  const index: number = Math.floor(Math.random() * 4);

  const randomgenerator = () => {
    let low = 0;
    let high = 0;
    if (count == numQues) {
    }
    if (diffLevel == 1) {
      low = 1;
      high = 20;
    }
    else if (diffLevel == 2) {
      low = 20;
      high = 80;
    }
    else if (diffLevel == 3) {
      low = 81;
      high = 125;
    }
    const limit1 = low;
    const limit2 = high;
    const minCeiled = Math.ceil(limit1);
    const maxFloored = Math.floor(limit2);
    setRandomNum1(Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled));
    setRandomNum2(Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled));
    setCount(count + 1);
  }

  let answer: number;
  if (index == 0) {

    answer = randomNum1 + randomNum2;
  }
  else if (index == 1) {

    answer = randomNum1 - randomNum2;
  }
  else if (index == 2) {

    answer = randomNum1 * randomNum2;
  }
  else if (index == 3) {

    answer = randomNum1 / randomNum2;
  }
  const options = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), answer];
  const index2 = Math.floor(Math.random() * 4);
  useEffect(() => {
    randomgenerator();
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={images.header2}
        style={styles.header}
      />
      <View style={styles.profile}>
        <Image
          source={Icons.account}
          style={styles.profImage}
        />
        <Text style={styles.proftext}>
          {userName}
        </Text>
      </View>

      <View style={styles.question}>
        <Text style={styles.quesNo}>
          Question No. {count}
        </Text>
        <Text style={styles.sum}>
          {randomNum1} {operator[index]} {randomNum2}
        </Text>
        <TouchableOpacity style={styles.options}>
          <Text style={styles.optText}>
            {options[0]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.options}>
          <Text style={styles.optText}>

            {options[1]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.options}>
          <Text style={styles.optText}>

            {options[2]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.options} onPress={() => setCorrect(correct + 1)}>
          <Text style={styles.optText}>
            {options[3]}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {
        randomgenerator()
        numQues == count && navigation.navigate('AnswerScreen', { numQues: numQues, correct: correct })
      }}>
        <Text style={styles.buttonTxt}>
          Next
        </Text>
      </TouchableOpacity>
      <View style={styles.answer}>
        <Text style={styles.textAns}>
          Total Questions: {count}
        </Text>
        <Text style={styles.textAns1}>

          Correct Answers: {correct}
        </Text>
        <Text style={styles.textAns2}>

          Wrong Answers: {numQues - correct}
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
