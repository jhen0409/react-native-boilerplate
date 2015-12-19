import React, * as rnw from 'react-native-web';

export function getRNMocks() {
  const ReactMocks = {
    ...React,
    ...rnw,
    TouchableHighlight: rnw.Touchable
  };
  return ReactMocks;
}
