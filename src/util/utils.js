import RNFS from 'react-native-fs';

export const removeExtensionFromFileName = (file) => {
  return file.split(/(.+?)(\.[^.]*$|$)/)[1];
};

export const getBookURL = async (uri) => {
  try {
    if (uri.startsWith('content://')) {
      const uriComponents = uri.split('/');
      const fileNameAndExtension = uriComponents[uriComponents.length - 1];
      const destPath = `${RNFS.TemporaryDirectoryPath}/${fileNameAndExtension}`;
      await RNFS.copyFile(uri, destPath);
      return `file://${destPath}`;
    }
  } catch (e) {
    return '';
  }
};