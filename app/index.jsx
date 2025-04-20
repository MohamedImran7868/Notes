import { router } from "expo-router";
import { Text, View, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";

const Index = () => {
  const {user, loading} = useAuth();
  const router = useRouter();
  useEffect(() => {
    if(!loading && user){
      router.replace('/notes')
    }
  }, [user, loading]);

  if(loading){
    return(
      <View style={styles.centeredContainer}>
        <ActivityIndicator size='large' color='green'/>
      </View>
    )
  }
  return (
    <View
      style={styles.container}
    >
      <Image source={require('../assets/images/Logo.png')} style={styles.image} />
      <Text style={styles.title}>Welcome to Notes.</Text>
      <Text style={styles.subtitle}>Write down all your things here.</Text>
      <TouchableOpacity 
      style={styles.button}
      onPress={() => router.push('/notes')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 20,
  },
  title:{
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle:{
    marginBottom: 15,
  },
  button: {
    width: "40%",
    paddingVertical: 14,
    borderRadius: 50,
    alignItems: "center",
    backgroundColor: "#007bff",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  centeredContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }
})

export default Index;
