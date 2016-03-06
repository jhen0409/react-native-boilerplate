import { jsdom } from 'jsdom';

global.fetch = require('node-fetch');
global.Immutable = require('immutable');
global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;
