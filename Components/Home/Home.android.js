import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import styles from "./Home.styles";
import { LinearGradient } from 'expo-linear-gradient';
import Icon from "react-native-vector-icons/MaterialIcons";

const Home = () => {

    const colors = ["#dd8b76", "#76ddce", "#ab87e7"];
    const buttons = ["pomodoro", "short break", "long break"];
    const [press, setPress] = useState({ click: false, switchText: "start", tapNum: 0 });
    const [seconds, setSeconds] = useState(parseInt('00', 8));
    const SECOND = 1e2.toString().slice(1);
    const MINUTE = 1e2.toString().slice(1);

    function clicked () {
        setPress(true);
        setTimeout(() => {
            if(press.tapNum === 2) {
                setPress({ click: false, switchText: "start", tapNum: press.tapNum - 1 });
            } else {
                setPress({ click: false, switchText: "pause", tapNum: press.tapNum + 1 });
            }
        }, 100);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headline}>pomodoro</Text>
            <View style={styles.nav}>
            </View>
            <TouchableOpacity style={[styles.upperLayer, press ? {elevation: 10} : {elevation: 20}]} onPress={clicked} activeOpacity={1}>
                <LinearGradient colors={["#11233d", "#546b8f"]} start={{ x: .5, y: .5 }} end={{ x: 1, y: 1 }} style={styles.grantLayer}>
                    <View style={styles.parentLayer}>
                        <View style={[styles.childLayer, { borderColor: "yellow" }]}>
                            <Text style={styles.time}>{MINUTE}:{SECOND}</Text>
                            <Text style={styles.switchText}>{press.switchText}</Text>
                        </View>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
            <Icon name='settings' size={40} color={"darkgray"}></Icon>
        </View>
    )
}

export default Home;