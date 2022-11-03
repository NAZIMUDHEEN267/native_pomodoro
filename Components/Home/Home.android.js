import { View, Text } from 'react-native';
import { useState } from 'react';
import styles from "./Home.styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import Timer from '../Timer/Timer';
// import {  } from "react-native-reanimated";

const Home = () => {

    const colors = ["#dd8b76", "#76ddce", "#ab87e7"];
    const buttons = ["pomodoro", "short break", "long break"];

    return (
        <View style={styles.container}>
            <Text style={styles.headline}>pomodoro</Text>
            <View style={styles.nav}>
            </View>
            <Timer color={colors[0]}/>
            <Icon name='settings' size={40} color={"darkgray"}></Icon>
        </View>
    )
}

export default Home;