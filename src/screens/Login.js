import React, { useState } from 'react';
import {
  ImageBackground,
  View,
} from 'react-native';
import {
  TextInput,
  Button,
} from 'react-native-paper';

import styles from '../styles';

const image = { uri: "https://reactjs.org/logo-og.png" };

const Login = ({ navigation }) => {
  const [data, setData] = useState({});

  const onChangeInput = (name) => {
    return (value) => setData((prevState) => ({
      ...prevState,
      [name]: value.trim(),
    }));
  };

  const login = () => {
    navigation.navigate('Teste', data);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>

        <TextInput
          label="Email"
          onChangeText={onChangeInput("email")}
          value={data.email}
          style={styles.default}
        />

        <TextInput
          label="Senha"
          onChangeText={onChangeInput("password")}
          value={data.password}
          style={styles.default}
          secureTextEntry={true}
        />

        <Button
          mode="contained"
          onPress={login}
          style={styles.default}
        >
          Login
        </Button>
      </ImageBackground>

    </View>
  );
};

export default Login;
