import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import connect from 'react-redux/es/connect/connect'
import {addNum, deleteNum} from 'actions/test'

@connect(
  state => ({ ...state.test }),
  dispatch => bindActionCreators({addNum, deleteNum}, dispatch)
)

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { addNum, deleteNum, num } = this.props;
    return (
      <div>
        <div>{num}</div>
        <button onClick={addNum}>++++++</button>
        <button onClick={deleteNum}>------</button>
      </div>
    )
  }
}