import React from 'react';
import { WebView } from 'react-native-webview';

const Reader = ({ route }) => {
  const book = route.params;

  let injectedJS = `
    window.BOOK_PATH = "${book.url}";
    window.BOOK_LOCATION = '1';
  `;

  return (
    <WebView
      source={{ uri: 'file:///android_asset/epub.html' }}
      injectedJavaScriptBeforeContentLoaded={injectedJS}
      style={{ flex: 1 }}
    />
  );
}

export default Reader;
