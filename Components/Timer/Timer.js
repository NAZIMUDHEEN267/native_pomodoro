import { View, Text, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import Animated, { useSharedValue, useAnimatedProps, withTiming } from "react-native-reanimated";
import styles from "./Timer.style";
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Circle } from "react-native-svg";

const Timer = ({color}) => {
    const AnimatedCircle = Animated.createAnimatedComponent(Circle);
    const SECOND = 1e2.toString().slice(1);
    const MINUTE = 1e2.toString().slice(1);
    
    // hooks
    const progress = useSharedValue(0);
    const animatedProps = useAnimatedProps(() => ({
        strokeDashoffset: 720 * progress.value
    }));
    const [press, setPress] = useState({ click: false, switchText: "start", tapNum: 0 });
    useEffect(() => {
        progress.value = withTiming(press.tapNum + 1, {duration: 12000});
    }, [])

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
            <LinearGradient colors={["#11233d", "#546b8f"]} style={styles.grantLayer}>
                <View style={[styles.parentLayer, {
                    transform: [{ rotate: "270deg" }]
                }]}>
                    <Svg>
                        <AnimatedCircle 
                        cx={130} cy={130} 
                        r={360 / Math.PI} 
                        stroke={color} 
                        strokeWidth={10} 
                        strokeDasharray={720}
                        animatedProps={animatedProps} />
                    </Svg>
                    <View style={[styles.childLayer, { transform: [{ rotate: "90deg" }] }]}>
                        <Text style={styles.time}>00:00</Text>
                        <Text style={styles.switchText}>{press.switchText}</Text>
                    </View>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default Timer