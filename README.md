# react-native-manage-wallpaper

Android wallpaper manager for changing wallpaper.

<a href="https://twitter.com/intent/follow?screen_name=meharbhutta"><img src="https://img.shields.io/twitter/follow/meharbhutta.svg?style=social&logo=twitter" alt="follow on Twitter" /></a>

## NPM

- stable release version: ![version](https://img.shields.io/badge/version-1.0.1-blue.svg?cacheSeconds=2592000)
- package downloads: ![downloads](https://img.shields.io/badge/downloads-22%2Fweek-brightgreen.svg?cacheSeconds=2592000)
- [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## Getting started

### Installation

`$ npm install react-native-manage-wallpaper --save`

### Basic Usage

- Initialization of a react-native project

`$ npx react-native init AwesomeProject`

### Note: [GUIDE](https://facebook.github.io/react-native/docs/getting-started)

- Then, edit `AwesomeProject/App.js`, like this:

```javascript
import { View, TouchableOpacity, Text } from 'react-native';
import ManageWallpaper, { TYPE } from 'react-native-manage-wallpaper';

export default class App extends Component<{}> {
  _callback = res => {
    console.log('Response: ', res);
  };

  _setWallpaper = () => {
   ManageWallpaper.setWallpaper(
      {
        uri: {
          uri: 'https://i.pinimg.com/originals/76/5e/1d/765e1dc8cb1cc115fb3b0b39a895fdeb.jpg',
        },
      },
      this._callback,
      TYPE.HOME,
    );
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F5FCFF',
        }}
      >
        <TouchableOpacity
          style={{
            paddingHorizontal: 30,
            paddingVertical: 8,
            marginBottom: 24,
            borderRadius: 16,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#000000',
          }}
          onPress={this._setWallpaper}
        >
          <Text
            style={{
              fontSize: 20,
              margin: 10,
              textAlign: 'center',
              color: '#FFFFFF',
            }}
          >
            Change Home Wallpaper
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
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
import { TYPE } from 'react-native-manage-wallpaper';
```

Then,  
For Home use TYPE.HOME  
For Lock use TYPE.LOCK  
For Home & LOCK use TYPE.BOTH

##### Note: No support for setting wallpaper on Lock Screen for android version < 24 (Nougat).

### To run example

```bash
cd example
yarn
npx react-native run-android
```

#### In case of any issue follow the [GUIDE](https://facebook.github.io/react-native/docs/getting-started).
