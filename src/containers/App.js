import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/counter';

export default 
  connect(
    state => ({
      counter: state.counter
    }),
    dispatch => bindActionCreators(CounterActions, dispatch)
  )(Counter);