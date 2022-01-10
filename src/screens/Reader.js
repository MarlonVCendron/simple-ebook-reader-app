import React, { useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
import StaticServer from 'react-native-static-server';
import { ExternalStorageDirectoryPath } from 'react-native-fs';

import { getBookURL } from '../util/utils';
import Spinner from '../components/Spinner';

const serverConfig = { localOnly: true, keepAlive: true };

const Reader = ({ route }) => {
  const [server, setServer] = useState();
  const [url, setUrl] = useState();
  const [injectedJS, setInjectedJS] = useState('');
  const book = route.params;

  useEffect(() => {
    const asyncUseEffect = async () => {
      const newServer = new StaticServer(0, ExternalStorageDirectoryPath, serverConfig);
      const bookFileUrl = await getBookURL(book.uri);
      const serverUrl = await newServer.start();

      // const bookUrl = serverUrl + bookFileUrl.replace('file://', '');

      const bookUrl = serverUrl + '/Download/moby-dick.epub';

      console.log(bookUrl);
      setUrl(bookUrl);
      setServer(newServer);
    };

    asyncUseEffect();
    return () => {
      state.server && state.server.stop();
    };
  }, []);

  useEffect(() => {
    setInjectedJS(`
      window.BOOK_PATH = '${url}';
      window.BOOK_LOCATION = '1';
    `);
  }, [url]);

  if (!url) return <Spinner />;
  return (
    <WebView
      source={{ uri: 'file:///android_asset/epub.html' }}
      injectedJavaScriptBeforeContentLoaded={injectedJS}
      style={{ flex: 1 }}
    />
  );
}

export default Reader;
