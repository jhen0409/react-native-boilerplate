#!/bin/bash

# check dev engines
node node_modules/fbjs-scripts/node/check-dev-engines.js package.json

# rnpm link <module name>

# replace react-native debugger-ui
remotedev-debugger-replace