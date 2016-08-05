import { jsdom } from 'jsdom';

global.fetch = require('node-fetch');

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;

require('babel-polyfill');
require('react-native-mock/mock');
