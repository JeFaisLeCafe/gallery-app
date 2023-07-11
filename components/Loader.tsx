import { View, Text, StyleSheet } from "react-native";
import AnimatedLoader from "react-native-animated-loader";

export default function Loader() {
  return (
    <View style={styles.container}>
      <AnimatedLoader
        visible={true}
        overlayColor="rgba(255,255,255,0.75)"
        animationStyle={styles.animation}
        speed={1}
      ></AnimatedLoader>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  animation: { width: 100, height: 100 }
});
