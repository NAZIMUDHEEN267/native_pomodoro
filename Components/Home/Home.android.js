import { View, Text } from 'react-native';
import styles from "./Home.styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import Timer from '../Timer/Timer';
import { Button } from '../Button';
// import {  } from "react-native-reanimated";

const Home = () => {

    const colors = ["#dd8b76", "#76ddce", "#ab87e7"];
    const buttons = ["pomodoro", "short break", "long break"];

    return (
        <View style={styles.container}>
            <Text style={styles.headline}>pomodoro</Text>
            <View style={styles.nav}>
                {
                    buttons.map((text, i) => {
                        return <Button btnStyle={styles.btnStyle} text={text} clicked={i == 0 ? colors[0] : 'transparent'} key={text+i}/>
                    })
                }
            </View>
            <Timer color={colors[0]}/>
            <Icon name='settings' size={40} color={"darkgray"}></Icon>
        </View>
    )
}

export default Home;