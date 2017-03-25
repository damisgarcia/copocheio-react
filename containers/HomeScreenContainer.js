import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import HomeScreen from '../screens/HomeScreen';
import * as StoreActions from '../actions/store';

class HomeScreenContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state } = this.props;

    return (
      <HomeScreen {...this.props}/>
    )
  }
}

function mapStateToProps(state) {
  return {
    state: state.store
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchProducts: (products) => { return dispatch(StoreActions.fetchProducts(products)) }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreenContainer);
