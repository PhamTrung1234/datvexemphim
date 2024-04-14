import React, { Component } from 'react'
import Row from './row';
import {connect} from "react-redux"
 class ListRow extends Component {
  renderrow = ()=>{
  return this.props.listrow.listrow.map((pro,index)=>{
      return <Row key={index} row={pro} listcol={this.props.listrow.listcol}/>
  })
  }
  render() {
    
    return (
      <>
        {this.renderrow()}
      </>
    )
  }
}
const mapStatetoProps=(state)=>{
  return{
    listrow:state.datareducer
  }
}
export default connect(mapStatetoProps,null) (ListRow)