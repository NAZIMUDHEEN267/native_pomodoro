import { View, Text, TouchableOpacity } from 'react-native';
import styles from "./Home.styles";

const Home = () => {

    const colors = ["#dd8b76", "#76ddce", "#ab87e7"];
    const buttons = ["pomodoro", "short break", "long break"];

    return (
        <View style={styles.container}>
            <Text style={styles.headline}>pomodoro</Text>
            <View style={styles.nav}>
               {
                buttons.map((text, i) => {
                    return (
                        <TouchableOpacity style={[styles.btn, { backgroundColor: colors[0] }]} key={text+i}>
                            <Text style={styles.btnFont}>{text}</Text>
                        </TouchableOpacity>
                    )
                })
               }
            </View>
        </View>
    )
}

export default Home;