import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

import styles from '../styles';
import BookItem from '../components/BookItem';
import { addBooks } from '../store/books/actions'

const Library = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const { login } = route?.params || {};

  useEffect(() => {
    dispatch(addBooks());

    navigation.setOptions({ title: `${login || 'Anonymous'}'s Library` })
  }, []);

  return (
    <View style={styles.containerMargin}>
      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        data={books}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          <BookItem book={item} navigation={navigation} />
        }
      />
    </View>
  );
};

export default Library;
