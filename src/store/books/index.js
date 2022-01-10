import { REHYDRATE } from 'redux-persist/lib/constants';

const INITIAL_STATE = { books: [] }

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'add_books:success': {
      const books = action.payload.filter((newBook) => (
        !state.books.find((stateBook) => stateBook.uri === newBook.uri) &&
        newBook.type === 'application/epub+zip'
      ));
      return { ...state, books: [...state.books, ...books] };
    }

    case 'add_books:failure': {
      return state;
    }

    case 'remove_book': {
      const books = state.books.filter((book) => book.uri !== action.payload);
      return { ...state, books };
    }

    default:
      return state;
  }
}
