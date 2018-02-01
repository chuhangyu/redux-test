import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import connect from 'react-redux/es/connect/connect'
import PropTypes from 'prop-types'
import {addNum, deleteNum} from 'actions/Test'
import {addhome, deletehome} from 'actions/home'
@connect(
  state => state,
  dispatch => bindActionCreators({addNum, deleteNum, addhome, deletehome}, dispatch)
)

export default class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    console.log(this.props)
    const {addNum, deleteNum, num} = this.props;
    return (
      <div>
        <div>{num}</div>
        <button onClick={dispatch(addhome())}>++++++</button>
        <button onClick={deletehome}>------</button>
      </div>
    )
  }
}