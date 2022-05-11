import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Mainlist extends Component {
  
  change = (event) => {
    const lists = document.getElementsByClassName('tag');
    var a = 0;
    
    for(var i =0;i < this.props.data.count.length;i++){
        if(lists[i].checked){
            a += 1;   
        }
    }
    this.props.changenum(a);
    
  }
  render() {
    const {count} = this.props.data;
    
    return (
      <div>
        <ul>
         {
           count.map(item => {
              return <li key={item.key} ><input type='checkbox' onChange={this.change} className='tag' />{item.text}</li>
           })
         }
         </ul>
      </div>
    )
  }
}

export default connect(
  data => ({data}),
  dispatch => ({
    choose : num => {dispatch({type:'choose',data:num})},
    changenum : c => {dispatch({type:'changenum',data:c})}
  })
)(Mainlist)