# React Native Boilerplate [![Build Status](https://travis-ci.org/jhen0409/react-native-boilerplate.svg)](https://travis-ci.org/jhen0409/react-native-boilerplate)

The React Native, Redux boilerplate for personal usage.

## Install

See [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) to install requirement tools.

#### npm dependencies

```bash
$ npm install -g react-native-cli
$ npm install
```

#### rnpm link modules

You can edit `postinstall.sh` to use `rnpm` link react-native iOS/Android modules.

## Development

#### Start local server

```bash
# Start remote-redux-devtools local server
$ npm run remotedev
# on another terminal tab
$ npm start
```

#### iOS

Open `ios/RNBoilerplate.xcodeproj` file with XCode:

```bash
$ npm run ios-open
```

#### Android

Open Android emulator (recommented [Genymotion](https://www.genymotion.com)) and run command:

```bash
$ npm run android
```

## Test

We used `react-native-web` to mock `react-native` most components, and test with `mocha`, `enzyme`.

```bash
$ npm test
```

## Use this to create new project

* Run `npm run newproject` command
* Type your project name
* It will be replaced all `RNboilerplate`, `rnboilerplate` words with your project name

## Credits

* [react-native-counter-ios-android](https://github.com/chentsulin/react-native-counter-ios-android)'s counter example.

## LICENSE

[MIT](LICENSE)