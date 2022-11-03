import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import styles from "./Timer.style";
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Circle } from "react-native-svg";

const Timer = ({color}) => {
    const [press, setPress] = useState({ click: false, switchText: "start", tapNum: 0 });
    const [seconds, setSeconds] = useState(parseInt('00', 8));

    const SECOND = 1e2.toString().slice(1);
    const MINUTE = 1e2.toString().slice(1);


    function clicked() {
        setPress(true);
        setTimeout(() => {
            if (press.tapNum === 2) {
                setPress({ click: false, switchText: "start", tapNum: press.tapNum - 1 });
            } else {
                setPress({ click: false, switchText: "pause", tapNum: press.tapNum + 1 });
            }
        }, 100);
    }
    return (
        <TouchableOpacity style={[styles.upperLayer, press ? { elevation: 10 } : { elevation: 20 }]} onPress={clicked} activeOpacity={.8}>
            <LinearGradient colors={["#11233d", "#546b8f"]} start={{ x: .5, y: .5 }} end={{ x: 1, y: 1 }} style={styles.grantLayer}>
                <View style={styles.parentLayer}>
                    <Svg>
                        <Circle cx={130} cy={130} r={350 / Math.PI} stroke={color} strokeWidth={10} />
                    </Svg>
                    <View style={styles.childLayer}>
                        <Text style={styles.time}>00:00</Text>
                        <Text style={styles.switchText}>{press.switchText}</Text>
                    </View>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default Timer