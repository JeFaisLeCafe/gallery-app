import { View, Text, StyleSheet } from "react-native";

export default function Error({ error }: { error?: Error }) {
  return (
    <View style={styles.container}>
      <Text>Something went wrong</Text>
      <Text>{error?.message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
