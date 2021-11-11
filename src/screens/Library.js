import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import styles from '../styles';
import { getBooks } from '../services/library.service';
import BookItem from '../components/BookItem';

const Library = ({ navigation, route }) => {
  const [books, setBooks] = useState([]);
  const { login } = route.params;

  useEffect(() => {
    const ret = getBooks(login);
    setBooks(ret);

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
