import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

@connect(
  state => state,
  dispatch => ({ dispatch })
)
export default class Root extends Component {

  handleNavigation = (action) => {
    const { dispatch } = this.props;
    dispatch(action);
  }

  render() {
    return this.props.renderNavigation(
      this.props.navigationState,
      this.handleNavigation
    );
  }
}
