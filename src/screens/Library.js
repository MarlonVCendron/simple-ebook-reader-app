import React, { useEffect } from 'react';
import { Text, FlatList, View } from 'react-native';
import { FAB } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux'

import styles from '../styles';
import BookItem from '../components/BookItem';
import { addBooks } from '../store/books/actions'

const Library = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);
  const { login } = route?.params || {};

  useEffect(() => {
    navigation.setOptions({ title: `${login || 'Anonymous'}'s Library` })
  }, []);

  return (
    <View style={styles.containerMargin}>
      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        data={books}
        numColumns={2}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.emptyMessageStyle}>Your library is empty</Text>}
        renderItem={({ item }) =>
          <BookItem book={item} navigation={navigation} />
        }
      />
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => dispatch(addBooks())}
      />
    </View>
  );
};

export default Library;
