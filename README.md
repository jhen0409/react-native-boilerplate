# React Native Boilerplate [![Build Status](https://travis-ci.org/jhen0409/react-native-boilerplate.svg)](https://travis-ci.org/jhen0409/react-native-boilerplate)

The React Native, Redux boilerplate for personal usage.

## Install

#### npm dependencies

```bash
npm install
```

#### rnpm link modules

You can edit `postinstall.sh` to use `rnpm` link react-native iOS/Android modules.

## Development

#### iOS

Open `ios/RNBoilerplate.xcodeproj` file with XCode:

```bash
npm run ios-open
```

#### Android

Open Android emulator (recommented [Genymotion](https://www.genymotion.com)) and run command:

```bash
npm run android
```

## Test

We used `react-native-web` to mock `react-native` most components, and test with `mocha`, `enzyme`.

```bash
npm test
# with watch
npm test-watch
```

## Why create `babel-preset-rn`?

We running tests with node, we must check JS syntax are consistent with `react-native` runtime, so we referenced [packager .babelrc](https://github.com/facebook/react-native/blob/master/packager/react-packager/.babelrc) and created [babel-preset-rn](https://github.com/jhen0409/babel-preset-rn).

## Use this to create new project

* Run `npm run newproject` command
* Type your project name
* It will be replaced all `RNboilerplate`, `rnboilerplate` words with your project name

## Credits

* [react-native-counter-ios-android](https://github.com/chentsulin/react-native-counter-ios-android)'s counter example.

## LICENSE

[MIT](LICENSE)