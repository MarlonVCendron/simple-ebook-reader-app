import { Alert, PermissionsAndroid } from 'react-native';

export const getStoragePermission = async () => {
  const permissions = await PermissionsAndroid.requestMultiple(
    [
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    ],
    {
      title: 'Ebook Reader Storage Permission',
      message: 'Ebook Reader needs to access your storage'
    }
  );

  if (permissions['android.permission.READ_EXTERNAL_STORAGE'] !== 'granted') {
    Alert.alert(
      'Permission required',
      'Allow Ebook Reader to access your storage',
      [{ text: 'OK', onPress: async () => await getStoragePermission() }],
      { cancelable: false }
    );
  }
};

export const checkStoragePermissions = async () => {
  return await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
  );
};
