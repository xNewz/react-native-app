import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert , ScrollView} from 'react-native';
const App = () => {
  const validate = (text) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    console.log(text, reg.test(text));
  };
  return (
    <ScrollView >
      <View style={styles.container}>
        <Text style={styles.titleText}>ATJPO</Text>
        <Text style={styles.signinText}>Sign in</Text>
        <StatusBar style="auto" />
        <TextInput style={styles.input} placeholder="Email" label="Email" onChangeText={validate} />
        <TextInput style={styles.input} placeholder="Password" label="Password" secureTextEntry />
        <Text style={styles.forgotPass}>Forgot password?</Text>
        <Text style={{ fontSize: 15, marginTop: 50 }}>If you don't have an account</Text>
        <Text style={{
          fontSize: 15,
          color: '#14aaff',
          marginTop: 10,
          marginBottom: 30
        }}>Create an account</Text>
        <View style={{ width: "80%", margin: 10 }}><Button title="Sign in" onPress={() => Alert.alert('you has been login successfully!')} /></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 50,
    fontWeight: "bold",
    color: '#14aaff',
    paddingTop: 100,
  },
  signinText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 150,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    alignSelf: "stretch",
    marginHorizontal: 50,
    paddingHorizontal: 20,
    borderColor: "gray",
  },
  forgotPass: {
    fontSize: 15,
    color: '#14aaff',
    marginTop: 10
  },
});

export default App;