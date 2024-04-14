import React, { Component } from 'react'
import { connect } from "react-redux"
import { nhapLaiLieu } from '../store/action';
class Row extends Component {




  onchangecheckbox = (e) => {
    const isChecked = e.target.checked;
    const checkedValue = e.target.value;
    const { userdata } = this.props;
    if (userdata?.numOfSeat > 0) {
      if (isChecked) {
        e.target.className = "green-box"
        userdata.numOfSeat--;
        userdata.seat.push(checkedValue);
      } else {
        e.target.className = "seat"
        userdata.numOfSeat++;
        const newseat = [...userdata.seat]
        const arr = newseat.filter(pro => {
          return pro !== checkedValue;
        })
        userdata.seat = arr
      }
    }
    this.props.nhapLaiDuLieu(userdata)
  }

  rendercol = () => {
    const { listcol, listuser, row } = this.props
    const listSeat = [];
    listuser.forEach(element => {
      element.seat.forEach(pro => {
        listSeat.push(pro)
      })
    });
    return listcol.map((pro, index) => {
      if (pro.col === "") {
        return (
          <td key={index}></td>
        )
      } else {
        let val = row.row + pro.col;
        let found = true;
        listSeat.forEach(pro => {
          if (pro === val) {
            found = false;
          }
        })
        if (found) {
          return (
            <td key={index}>
              <input type="checkbox"
                className='seat'
                value={val} onChange={(e) => { this.onchangecheckbox(e) }} />
            </td>
          )
        } else {
          return (
            <td key={index}>
              <input type="checkbox"
                className='red-box'
                disabled
                value={val} onChange={(e) => { this.onchangecheckbox(e) }} />
            </td>
          )
        }
      }
    })
  }
  renderrow = () => {
    if (this.props.row.row === "") {
      return (
        <tr className='seat__gap'></tr>
      )
    } else {
      return (
        <tr>
          <td>{this.props.row.row}</td>
          {this.rendercol()}
        </tr>
      )
    }
  }
  render() {
    return (
      <>
        {this.renderrow()}
      </>
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
    nhapLaiDuLieu: (data) => {
      
      dispatch(nhapLaiLieu(data))
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Row)