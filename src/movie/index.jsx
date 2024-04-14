import React, { Component } from 'react'
import Form from './form-top'
import Introduce from './introduce'
import ListCol from './listcol';
import ListRow from './listrow';
import Table from './table';
import Heading from './bottom/heading';
import Table1 from './bottom/table';
import ListCol1 from "./bottom/listcol"
import ListRow1 from "./bottom/listrow"

 class Index extends Component {


  render() {
    
    return (
      <>
        <div id='top'>
          <h1 className='text-center mt-0'>Movie Seat Selection</h1>
          <div className='container'>
            <div className='content'>
              <h2>fill the required details below and select your seats</h2>
              <Form />

              <Introduce />
              
              <div className='content__product'>
                <table>
                  <tbody>
                    <ListCol />
                    <ListRow  />
                  </tbody>
                </table>
              </div>
              <div className='content__sceen'>
                <h2>Screen this way</h2>
              </div>
              
              
              <Table />
            </div>
          </div>
          <div className='footer mt-5'>
            <p className='text-center mb-0 pb-3'>© 2018 Movie Seat Selection . All Rights Reserved | Design by W3layouts</p>
          </div>
        </div>
        <div id='bottom'>
          <Heading/>
          
          <div className='bottom__content pb-5'>
            <div className='row mr-0 ml-0 pb-5 align-items-top'>
              <div className='col-md-7 '>
                <table className='w-100 '>
                  <tbody>
                    <ListCol1/>
                    <ListRow1/>
                  </tbody>
                </table>
              </div>
              <div className='col-md-5  '>
              <Introduce />
              <Table1/>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}



export default  Index