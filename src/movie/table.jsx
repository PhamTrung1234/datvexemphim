
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { upDateSystem, updateListUser } from '../store/action';
class Table extends Component {


  handelOnClick = (value, index) => {
    const arr = { ...value };
    arr.index = index;
    this.props.upSystemUser(arr)
    document.getElementById("top").style.display = "none"
    document.getElementById('bottom').style.display = "block"
  }


  handelListUser = () => {
    const { listuser } = this.props
    return listuser.map((pro, index) => {
      let content = ""
      pro.seat.forEach(pro => {
        content += (pro + " ; ");
      })
      return (
        <tr key={index}>

          <td>{pro.userName}</td>
          <td>{pro.total}</td>
          <td>{content}</td>
          <td>
            <button onClick={() => {this.handelOnClick(pro,index)

            }} className='btn btn-primary'>Chi Tiết</button>
          </td>
        </tr>
      )
    })
  }
  handalSubMit = () => {
    document.getElementById("username").value = "";
    document.getElementById("numOfSeat").value = "";
    this.props.upListUser(this.props?.userdata)
  }

  render() {

    return (
      <div>
        <div className='d-flex justify-content-center'>
          <button type='button' onClick={this.handalSubMit} >Confirm Selection</button>
        </div>
        <table className="table table__content  mt-5 mb-0">
          <thead>
            <tr>

              <th scope="col">Name</th>
              <th scope="col">Number of Seats</th>
              <th scope="col">Seats</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.handelListUser()}

          </tbody>
        </table>
      </div>
    )
  }
}
const mapStatetoProps = (stare) => {
  return {
    listuser: stare.datareducer.listuser,
    userdata: stare.datareducer.userData
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    upListUser: (data) => {
      
      dispatch(updateListUser(data))
    },
    upSystemUser: (data) => {
      
      dispatch(upDateSystem(data))
    }
  }
}
export default connect(mapStatetoProps, mapDispatchToProps)(Table) 