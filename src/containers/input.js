import React, { Component } from 'react'
import { connect } from 'react-redux'

class Input extends Component {
  
  sure = () => {
    this.props.add(this.new.value)
    this.new.value = '';
    this.new.focus();
  }
  render() {
    // console.log(this.props)
    return (
      <div>
          <input type='text' ref={a => {this.new = a}} />
          <button onClick={this.sure}>sure</button>
      </div>
    )
  }
}

export default connect(
  data => ({data}),
  dispatch => ({
    add : value => {dispatch({type:'add',data:value})}
  })
)(Input)