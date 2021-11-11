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
import { background } from '../img';

const Login = ({ navigation }) => {
  const [data, setData] = useState({});

  const onChangeInput = (name) => {
    return (value) => setData((prevState) => ({
      ...prevState,
      [name]: value.trim(),
    }));
  };

  const login = () => {
    navigation.navigate('Library', { login: data.login });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode="cover" style={styles.image}>
        <TextInput
          label="Login"
          onChangeText={onChangeInput("login")}
          value={data.login}
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
