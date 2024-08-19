import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function BuskScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>BuskScreen</Text>
      <Button title="Go to single Busk" onPress={() => navigation.navigate("SingleBuskScreen")}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40
  }
});
