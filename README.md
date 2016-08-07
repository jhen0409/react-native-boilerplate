# React Native Boilerplate [![Build Status](https://travis-ci.org/jhen0409/react-native-boilerplate.svg)](https://travis-ci.org/jhen0409/react-native-boilerplate) [![Dependency Status](https://david-dm.org/jhen0409/react-native-boilerplate.svg)](https://david-dm.org/jhen0409/react-native-boilerplate) [![devDependency Status](https://david-dm.org/jhen0409/react-native-boilerplate/dev-status.svg)](https://david-dm.org/jhen0409/react-native-boilerplate?type=dev)

> The React Native, Redux boilerplate for personal usage

## Screenshot

![screenshot](https://cloud.githubusercontent.com/assets/3001525/15508320/901e5fe6-2201-11e6-970b-e7c496ab1b16.gif)

> NavigationExperimental, Redux Counter example and Remote Redux DevTools control

## Included

* [React](https://github.com/facebook/react) & [React Native](https://github.com/facebook/react-native) v0.31
* [Redux](https://github.com/reactjs/redux) & [Remote Redux DevTools](https://github.com/zalmoxisus/remote-redux-devtools) & [On Debugger](https://github.com/jhen0409/remote-redux-devtools-on-debugger)
* [Immutable](https://github.com/facebook/immutable-js) & [Immutable DevTools](https://github.com/andrewdavey/immutable-devtools)
* [Babel](https://github.com/babel/babel) & Plugins: [transform-decorators-legacy](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy)

## Installation

See [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) to install requirement tools.

```bash
$ npm install -g react-native-cli
$ npm install
```

Also, you can use [generator-rnb](https://github.com/jhen0409/generator-rnb) to create project with this boilerplate.

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

Open Android emulator (recommended [Genymotion](https://www.genymotion.com)) and run command: (Or connect real device via USB)

```bash
$ npm run android
```

## DevTools

In development mode, you can install [React Native Debugger](https://github.com/jhen0409/react-native-debugger) as default debugger. if not install, it will use [Remote Redux DevTools](https://github.com/zalmoxisus/remote-redux-devtools) and [On Debugger](https://github.com/jhen0409/remote-redux-devtools-on-debugger).

## Test

We used [react-native-mock](https://github.com/lelandrichardson/react-native-mock), and test with [Mocha](https://github.com/mochajs/mocha), [Enzyme](https://github.com/airbnb/enzyme).

```bash
$ npm test
```

## Credits

* [react-native-counter-ios-android](https://github.com/chentsulin/react-native-counter-ios-android)'s counter example.

## LICENSE

[MIT](LICENSE)
