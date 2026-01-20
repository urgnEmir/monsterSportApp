import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const RegisterScreen = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('Istanbul'); 

  const handleRegister = async () => {
    try {
      
      const userData = { name, email, password, location };
      
  
      const response = await axios.post('http://10.78.204.108:5000/api/auth/register', userData);
      
      if (response.status === 201) {
        Alert.alert("Başarılı", "Kayıt oldun knk, şimdi giriş yap!");
      }
    } catch (error) {
      Alert.alert("Hata", "Kayıt sırasında bir sorun çıktı.");
    }
  };

  return (
    <View style={styles.container}>

      <TextInput 
        placeholder="Adın Soyadın" 
        onChangeText={text => setName(text)} 
        style={styles.input} 
      />

      <TextInput 
        placeholder="Email Adresin" 
        onChangeText={text => setEmail(text)} 
        keyboardType="email-address"
        style={styles.input} 
      />

 
      <TextInput 
        placeholder="Şifren" 
        secureTextEntry
        onChangeText={text => setPassword(text)} 
        style={styles.input} 
      />

      <Button title="Kayıt Ol" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderBottomWidth: 1, marginBottom: 15, padding: 10 }
});

export default RegisterScreen;