# React Native Boilerplate

The `react-native` boilerplate for personal usage.

## Install

#### npm dependencies

```bash
npm install
```

#### rnpm link modules

You can edit `postinstall.sh` to use `rnpm` link react-native iOS/Android modules.

## Development

#### iOS

Open `ios/RNboilerplate.xcodeproj` file with XCode:

```bash
npm run ios-open
```

#### Android

Open Android emulator (recommented [www.genymotion.com](Genymotion)) and run command:

```bash
npm run android
```

## Why create `babel-preset-rn`?

We running tests with node, we must check JS syntax are consistent with `react-native` runtime, so we referenced [packager .babelrc](https://github.com/facebook/react-native/blob/master/packager/react-packager/.babelrc) and created `babel-preset-rn`.

## Test

We used `react-native-web` to mock `react-native` most components, and test with `mocha`, `enzyme`.

```bash
npm test
```

## Credits

* [react-native-counter-ios-android](https://github.com/chentsulin/react-native-counter-ios-android)'s counter example.

## LICENSE

[MIT](LICENSE)