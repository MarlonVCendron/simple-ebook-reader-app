import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from './styles';

export default () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" style={{ marginBottom: 15 }} />
    </View>
  );
}