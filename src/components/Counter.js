import React, {
  Component,
  PropTypes,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default class Counter extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.instanceOf(Immutable.Map).isRequired
  };

  constructor(props) {
    super(props);
    const { incrementAsync } = props;
    this.incrementAsync = () => incrementAsync();
  }

  render() {
    const { increment, incrementIfOdd, decrement, counter } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Clicked: {counter.get('counter')} times</Text>
        <TouchableHighlight onPress={increment}>
          <Text style={styles.text}>+</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={decrement}>
          <Text style={styles.text}>-</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={incrementIfOdd}>
          <Text style={styles.text}>Increment if odd</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.incrementAsync}>
          <Text style={styles.text}>Increment async</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
