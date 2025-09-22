import { Text, View, StyleSheet, TextInput , TouchableOpacity} from "react-native";
import { Image } from "expo-image";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={{uri:"https://www.opensecrets.org.za/wp-content/uploads/2023/10/2023.10.27_Palestine-Media-Statement_MM1.png",}}
        style={{ width: 200, height: 120 }}
      />
      <Text style={styles.text}>Free Palestine.</Text>
      <Text >End the occupation.</Text>
      <Text >Support Palestinian rights.</Text>
      <TextInput placeholder="agree?" style={styles.textInput}/>
      <TouchableOpacity>
        <Text>Click Me!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {color: "red", fontSize: 40},
  textInput:{ borderWidth: 1, padding: 10 }
});