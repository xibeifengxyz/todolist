import React, { Component } from 'react'
import { connect } from 'react-redux'

class Choose extends Component {
  render() {
    return (
      <div>
          <span>^已选{this.props.data.num}</span><span>^全部{this.props.data.count.length}</span>
      </div>
    )
  }
}

export default connect(
    data => ({data}),
    dispatch => ({
      add : value => {dispatch({type:'add',data:value})}
    })
  )(Choose)