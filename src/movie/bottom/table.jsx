
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { upSystem } from '../../store/action';
 class Table1 extends Component {
   
  handelOnClick=(value)=>{
      
      const newsystem = {...this.props.systemuser};
      
      const newSeat = newsystem.seat.filter(pro=>{
           return pro !== value
      })
      newsystem.seat = newSeat
      this.props.updateSystem(newsystem)
      
  }
  
  
  
  
  handelData=()=>{
        const {systemuser,listdata}= this.props
        
         return systemuser?.seat.map((pro,index)=>{
              let price = listdata.filter(ele=>{
                  return ele.soGhe === pro
              })
              
              return (
                <tr key={index}>
              <td className='text-warning'>{pro}</td>
              <td className='text-warning'>{price[0].gia}</td>
              <td ><button onClick={()=>{this.handelOnClick(pro)}} className='btn text-danger'>Hủy</button></td>
            </tr>
              )
         })
        
   }


  render() {
    
    return (
      <>
        <table className="table bottom__table  mt-5 mb-0">
          <thead>
            <tr>

              <th className='text-light' scope="col">Số Ghế</th>
              <th className='text-light' scope="col">Giá</th>
              <th className='text-light' scope="col">Hủy</th>

            </tr>
          </thead>
          <tbody>
            
             {this.handelData()}
          </tbody>
        </table>
      </>
    )
  }
}
const mapStatetoProps = (state)=>{
    return {
       systemuser:state.datareducer.systemUser,
       listdata:state.datareducer.listdata

    }
}
const mapDispatchToProps = (dispatch)=>{
   return{
      updateSystem:(data)=>{
           
           dispatch(upSystem(data))
      }
   }
}
export default connect(mapStatetoProps,mapDispatchToProps) (Table1)