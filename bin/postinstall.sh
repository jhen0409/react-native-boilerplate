#!/bin/bash

# link babel-preset-rn
cd babel-preset-rn
npm install
cd ..
npm link ./babel-preset-rn

# check dev engines
node node_modules/fbjs-scripts/node/check-dev-engines.js package.json