import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';
import { setLoading } from '../../actions/test';

class Test extends Component {
  componentDidMount() {
    console.log('FROM TEST', this.props.test.loading);
  }

  render() {
    const { loading } = this.props.test;

    return (
      <View>
        <Text> from redux {loading.toString()} </Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    test: state.test
  };
};

export default connect(
  mapStateToProps,
  { setLoading }
)(Test);
