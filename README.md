# react-native-manage-wallpaper

Android wallpaper manager for changing wallpaper.

## NPM

- stable release version: ![version](https://img.shields.io/badge/version-1.1.2-blue.svg?cacheSeconds=2592000)
- package downloads: ![downloads](https://img.shields.io/badge/downloads-22%2Fweek-brightgreen.svg?cacheSeconds=2592000)
- [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## Getting started

### Installation

- Using yarn

`$ yarn add @tierrybr/react-native-manage-wallpaper`

- Using npm

`$ npm install @tierrybr/react-native-manage-wallpaper --save`

### Basic Usage

#### Note: You must be using React Native 0.60.0 or higher

- Initialization of a react-native project

`$ npx react-native init AwesomeProject`

### Note: [GUIDE](https://facebook.github.io/react-native/docs/getting-started)

- Then, edit `AwesomeProject/App.js`, like this:

```javascript
import { TouchableOpacity, Text } from 'react-native';
import ManageWallpaper, { TYPE } from '@tierrybr/react-native-manage-wallpaper';

export default function App() {

  setWallpaper = () => {
   ManageWallpaper.setWallpaper(
      {
        uri: 'https://i.pinimg.com/originals/76/5e/1d/765e1dc8cb1cc115fb3b0b39a895fdeb.jpg',
      },
      res => console.log(res),
      TYPE.HOME,
    );
  };

  return (
    <TouchableOpacity onPress={setWallpaper}>
      <Text>Set wallpaper<Text/>
    <TouchableOpacity/>
  )
}
```

### Are you using Glide already using an AppGlideModule?

Removing RNGlideModule from `react-native-manage-wallpaper`  
If you are using Glide within your application using an AppGlideModule then you will need to prevent the inclusion of the AppGlideModule in this package.

To accomplish this you can add to `android/build.gradle`:

```
project.ext {
  excludeRNGlideModule = true
}
```

### Arguments Type

Type of arguments for `setWallpaper(source, callback, type)`

#### source

The image source (either a remote URL or a local file resource).  
The currently supported formats are `png`, `jpg`, `jpeg`, `gif`.  
e.g.  
RemoteURL: { uri: 'remote url' }  
LocalFileURL: { uri: 'file:///local_file_url' }  
Local: require('path to local file with extension')

#### callback

Callback receive a response object ({ status, msg, url }).

1. status:  
   "error" string in case of handled error  
   OR  
   "success" string in case of successful setting of wallpaper.
2. msg: description related to status
3. url: resource url

#### type

The wallpaper setting type (home, lock or both).  
e.g.  
Firstly,

```javascript
import { TYPE } from '@tierrybr/react-native-manage-wallpaper';
```

Then,  
For Home use TYPE.HOME  
For Lock use TYPE.LOCK  
For Home & Lock use TYPE.BOTH

##### Note: No support for setting wallpaper on Lock Screen for android version < 24 (Nougat).

### To run example

```bash
cd example
yarn or npm install
npx react-native run-android
```

#### In case of any issue follow the [GUIDE](https://facebook.github.io/react-native/docs/getting-started).

### Supported React Native Versions  

This project only aims to support the latest version of React Native.  
This simplifies the development and the testing of the project.

If you require new features or bug fixes for older versions you can fork this project.

### Credits

The idea for this modules came from liuhong1happy react-native-wallpaper-manager package. It also uses Glide, but didn't have some features I needed (home, lock, both).
Fork based on lib https://github.com/meharbhutta/react-native-manage-wallpaper, however it is outdated.


### Licenses

ManageWallPaper - MIT © MeharBhutta  
Glide - BSD, part MIT and Apache 2.0. See the LICENSE file for details.
