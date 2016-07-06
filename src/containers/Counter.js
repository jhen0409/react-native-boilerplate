import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Counter from '../components/Counter';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../actions/counter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  back: {
    margin: 10,
    fontSize: 20,
  }
});

@connect(
  state => ({
    counter: state.counter
  }),
  dispatch => bindActionCreators(CounterActions, dispatch)
)
export default class CounterContainer extends Component {
  static propTypes = {
    navigate: PropTypes.func.isRequired
  };

  handleBack = () => {
    const { navigate } = this.props;
    navigate({ type: 'pop' });
  }

  render() {
    return (
      <View style={styles.container}>
        <Counter {...this.props} />
        <TouchableOpacity onPress={this.handleBack}>
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
