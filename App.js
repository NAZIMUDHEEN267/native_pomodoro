import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Home from "./Components/Home/Home";
import { Button } from './Components/Button';

export default function App() {
  return (
    <View>
      <Button
        btnStyle= {{
        btn: {
        flex: 1,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 50
    },
      btnFont: {
        fontSize: 14,
      fontWeight: "600",
      letterSpacing: .4
    },}
  }
  text={"press"} clicked={{bg: "red", color: "white"}}
    />
      <LinearGradient colors={["#11233d", "#343450"]} style={{ height: "100%" }} start={{ x: 1, y: .5 }} end={{ x: 1, y: 1 }}>
        <Home />
      </LinearGradient>
    </View>
  );
}

