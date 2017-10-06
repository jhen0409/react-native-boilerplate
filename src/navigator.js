import { StackNavigator } from 'react-navigation';

import Home from './containers/Home';
import Counter from './containers/Counter';

const AppNavigator = new StackNavigator(
  {
    Home: { screen: Home },
    Counter: { screen: Counter },
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      header: null,
    },
  },
);

export default AppNavigator;
