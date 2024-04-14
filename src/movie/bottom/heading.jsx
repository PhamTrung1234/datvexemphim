import React, { Component } from 'react'
import { connect  } from 'react-redux'
import { editData } from '../../store/action'
 class Heading extends Component {

  handelEditData=()=>{

    this.props.editData()
    document.getElementById('bottom').style.display = "none"
    document.getElementById('top').style.display = "block"

  }


  render() {
    return (
      <>
        <h1 className='py-5 mt-0 text-center text-warning'>Đặt vé xem phim tại syberland</h1>
        <button onClick={this.handelEditData} className='btn bottom__button'><i className="fa-solid fa-circle-xmark"></i></button>
      </>
    )
  }
}
const mapDispatchToProps = (dispatch)=>{
    return {
       editData:()=>{
          
          dispatch(editData())
       }
    }
}

export default connect(null,mapDispatchToProps) (Heading)