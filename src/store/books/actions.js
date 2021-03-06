export const addBooks = () => ({
  type: 'add_books',
});

export const addBooksSuccess = (books) => ({
  type: 'add_books:success',
  payload: books,
});

export const addBooksFailure = () => ({
  type: 'add_books:failure',
});

export const removeBook = (uri) => ({
  type: 'remove_book',
  payload: uri,
});