
import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

import styles from './styles';

const BookItem = ({ book, navigation }) => {

  const onPress = () => {
    navigation.navigate('Reader', book);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={styles.item}
    >
      <View>
        <Image
          style={styles.cover}
          source={{ uri: book.cover }}
          resizeMode='contain'
        />
        <Text numberOfLines={1} style={styles.title}>{book.title}</Text>
        <Text numberOfLines={1} style={styles.author}>{book.author}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BookItem;
