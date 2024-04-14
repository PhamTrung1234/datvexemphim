import React, { Component } from 'react'

export default class Introduce extends Component {
  render() {
    return (
      <>
          <ul className='pl-0'>
            <li className='small__box green__box'>Selected Seat</li>
            <li className='small__box red__box'>
            Reserved Seat
            </li>
            <li className='small__box light__box'>
            Empty Seat
            </li>
          </ul>
      </>
    )
  }
}
