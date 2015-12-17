#!/bin/bash

# check dev engines
node node_modules/fbjs-scripts/node/check-dev-engines.js package.json

# link babel-preset-rn
cd babel-preset-rn
npm install
cd ..
npm link ./babel-preset-rn

# rnpm link <module name>