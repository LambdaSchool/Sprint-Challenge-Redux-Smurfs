import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SmurfsList } from '../components';
import { fetchSmurfs } from '../actions';

class SmurfsListView extends Component {
  componentDidMount = () => this.props.fetchSmurfs();

  renderSmurfs = () => {
    return this.props.smurfs ? (
      <SmurfsList smurfs={this.props.smurfs} />
    ) : (
      <div>Loading smurfs...</div>
    );
  };

  render() {
    return <div>{this.renderSmurfs()}</div>;
  }
}

const mapStateToProps = ({ smurfs }) => {
  return { smurfs };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(SmurfsListView);
