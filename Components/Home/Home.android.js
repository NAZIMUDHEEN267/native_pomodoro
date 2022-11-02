import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import styles from "./Home.styles";
import { LinearGradient } from 'expo-linear-gradient';
import Icon from "react-native-vector-icons/MaterialIcons";

const Home = () => {

    const colors = ["#dd8b76", "#76ddce", "#ab87e7"];
    const buttons = ["pomodoro", "short break", "long break"];
    const [press, setPress] = useState()

    return (
        <View style={styles.container}>
            <Text style={styles.headline}>pomodoro</Text>
            <View style={styles.nav}>
            </View>
            <LinearGradient colors={["#11233d", "#546b8f"]} start={{ x: .5, y: .5 }} end={{ x: 1, y: 1 }} style={styles.grantLayer}>
                <View style={styles.parentLayer}>
                    <View style={[styles.childLayer, {borderColor: "yellow"}]}>
                        <Text style={styles.time}>15:50</Text>
                        <Text style={styles.switchText}>Start</Text>
                    </View>
                </View>
            </LinearGradient>
            <Icon name='settings' size={40} color={"darkgray"}></Icon>
        </View>
    )
}

export default Home;