import React, { Component } from 'react'
import {connect} from 'react-redux'
 class ListCol extends Component {
    rendercol=()=>{
        return this.props.listcol.map((pro,index)=>{
            return (
               <td key={index}>
                    {pro.col}
               </td>
            )
        })
    }
  render() {
    
    return (
      <tr>
        <td></td>
        {this.rendercol()}
      </tr>
    )
  }
}

const mapStatetoProps=(state)=>{
  return {
    listcol:state.datareducer.listcol,
  }
}
export default connect(mapStatetoProps,null) (ListCol)