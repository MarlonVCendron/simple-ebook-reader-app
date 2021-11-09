import React, { useState, useEffect, useRef } from 'react';
import { Text } from 'react-native';
import { StatusBar } from 'react-native';
import StaticServer from 'react-native-static-server';
import { ExternalStorageDirectoryPath } from 'react-native-fs';
import { WebView } from 'react-native-webview';

const serverConfig = { localOnly: true, keepAlive: true };

const Teste = (props) => {
  const [state, setState] = useState({ bookUrl: null, server: null });

  const webview = useRef();
  const { params } = props.route;
  // const currentLocation = props.locations[props.books[params.index].key];
  // const bookLocations = props.books[params.index].locations;
  // const { bg, fg, size, height } = props.settings;

  useEffect(() => {
    const newServer = new StaticServer(0, ExternalStorageDirectoryPath, serverConfig);
    newServer.start().then((url) =>
      setState({
        bookUrl: url + params.url.replace(ExternalStorageDirectoryPath, ''),
        server: newServer
      })
    );
    return () => {
      // props.sortBook(params.index);
      state.server && state.server.stop();
    };
  }, []);

  // useEffect(() => {
  //   refresh();
  //   StatusBar.setBackgroundColor(props.settings.bg, true);
  //   StatusBar.setBarStyle(`${props.settings.fg === '#000000' ? 'dark' : 'light'}-content`);
  // }, [bg, fg, size, height]);

  let injectedJS = `
    window.BOOK_PATH = "https://s3.amazonaws.com/moby-dick/moby-dick.epub";
  `;

  // window.BOOK_PATH = "${state.bookUrl}";
  // window.LOCATIONS = ${bookLocations};
  // window.THEME = ${JSON.stringify(themeToStyles(props.settings))};

  // if (currentLocation) {
  //   injectedJS = `
  //     ${injectedJS}
  // 	  window.BOOK_LOCATION = '${currentLocation}';
  // 	`;
  // }

  // function refresh() {
  //   webview.current?.injectJavaScript(`window.BOOK_LOCATION = "${currentLocation}"`);
  //   webview.current?.reload();
  // }

  // const handleMessage = (e) => {
  //   let parsedData = JSON.parse(e.nativeEvent.data);
  //   let { type } = parsedData;
  //   delete parsedData.type;
  //   switch (type) {
  //     case 'selected': {
  //       return;
  //     }
  //     case 'loc': {
  //       const { progress, totalPages } = parsedData;
  //       props.addMetadata({ progress, totalPages }, params.index);
  //       delete parsedData.progress;
  //       delete parsedData.totalPages;
  //       return props.addLocation(parsedData);
  //     }
  //     case 'key':
  //     case 'metadata':
  //     case 'contents':
  //     case 'locations':
  //       return props.addMetadata(parsedData, params.index);
  //     case 'search':
  //       return;
  //     default:
  //       return;
  //   }
  // }

  return (
    <WebView
      ref={webview}
      source={{ uri: 'file:///android_asset/epub.html' }}
      injectedJavaScriptBeforeContentLoaded={injectedJS}
    />
  );
}

export default Teste;
