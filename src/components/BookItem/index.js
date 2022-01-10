
import React from 'react';
import { Image, View, TouchableOpacity, Alert } from 'react-native';
import { Text } from 'react-native-paper';

import styles from './styles';
import { removeExtensionFromFileName } from '../../util/utils';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../store/books/actions'

const BookItem = ({ book, navigation }) => {
  const dispatch = useDispatch();

  const onPress = () => {
    navigation.navigate('Reader', book);
  };

  const alertDelete = () => (
    Alert.alert(
      'Delete book',
      `Do you really wish to delete ${book.name}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => dispatch(removeBook(book.uri)),
        }
      ],
      { cancelable: true },
    )
  );

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      onLongPress={alertDelete}
      style={styles.item}
    >
      <View>
        <Image
          style={styles.cover}
          source={{ uri: 'https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg' }}
          resizeMode='contain'
        />
        <Text numberOfLines={1} style={styles.title}>{removeExtensionFromFileName(book.name)}</Text>
        {/* <Text numberOfLines={1} style={styles.author}>{book.author}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

export default BookItem;
