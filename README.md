# React Native Boilerplate [![Build Status](https://travis-ci.org/jhen0409/react-native-boilerplate.svg)](https://travis-ci.org/jhen0409/react-native-boilerplate) [![Dependency Status](https://david-dm.org/jhen0409/react-native-boilerplate.svg)](https://david-dm.org/jhen0409/react-native-boilerplate) [![devDependency Status](https://david-dm.org/jhen0409/react-native-boilerplate/dev-status.svg)](https://david-dm.org/jhen0409/react-native-boilerplate#info=devDependencies)

The React Native, Redux boilerplate for personal usage.

## Installation

See [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) to install requirement tools.

```bash
$ npm install -g react-native-cli
$ npm install
```

## Development

#### Start local server

```bash
$ npm start
```

#### iOS

Run command to open iOS simulator and run app:

```bash
$ npm run ios
```

Or open `ios/RNBoilerplate.xcodeproj` file with XCode:

```bash
$ npm run ios-open
```

#### Android (5.0+)

Open Android emulator (recommented [Genymotion](https://www.genymotion.com)) and run command: (Or connect real device via USB)

```bash
$ adb reverse tcp:8081 tcp:8081  # react-native local server
$ adb reverse tcp:5678 tcp:5678  # remotedev local server
$ npm run android
```

__*[Emulator only]*__ If you're still use Android 4.0, it will cannot use `adb reverse`, you should use `10.0.2.2` (Genymotion: `10.0.3.2`) instead of `localhost` in [configureStore.js](src/configureStore.js#L15).

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
