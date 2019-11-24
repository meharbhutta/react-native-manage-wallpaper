import { NativeModules, Image, Platform } from 'react-native';

const TYPE = {
  HOME: 'home',
  LOCK: 'lock',
  BOTH: 'both',
};

const ManageWallpaper = {
  setWallpaper: (source, callback = res => {}, type) => {
    if (Platform.Version >= 24 && !type) {
      throw new Error(
        'Type is undefined\nimport {TYPE} from "react-native-manage-wallpaper\nUse TYPE.HOME"',
      );
    }

    if (!type) {
      type = TYPE.HOME;
    }

    if (typeof type !== 'string') {
      throw new Error(
        'Invalid type datatype\nimport {TYPE} from "react-native-manage-wallpaper\nUse TYPE.HOME"',
      );
    }

    if (!Object.values(TYPE).includes(type)) {
      throw new Error(
        'Invalid type\nimport {TYPE} from "react-native-manage-wallpaper\nUse TYPE.HOME"',
      );
    }

    NativeModules.ManageWallpaper.setWallpaper(Image.resolveAssetSource(source), type, callback);
  },
};

export default ManageWallpaper;

export { ManageWallpaper, TYPE };
