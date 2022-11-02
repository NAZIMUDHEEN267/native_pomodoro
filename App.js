import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Home from "./Components/Home/Home";

export default function App() {
  return (
    <View>
      <LinearGradient colors={["#11233d", "#343450"]} style={{ height: "100%" }} start={{ x: 1, y: .5 }} end={{ x: 1, y: 1 }}>
          <Home />
      </LinearGradient>
    </View>
  );
}

