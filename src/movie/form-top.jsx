import React, { Component } from 'react'
import { connect } from 'react-redux';
import { nhapLieu } from '../store/action';
 class Form extends Component {
   constructor(props){
    super(props);
    this.state={
      listuser:{
          userName:"",
          numOfSeat:"",
          seat:[],
          total:0,
      }
    }
   }
   handelOnChange=(event)=>{
       const value = event.target.value;
       const name = event.target.name;
       
       const newListUser = {...this.state.listuser,[name]:value}
       newListUser.total = newListUser.numOfSeat;
      this.setState({
        listuser:newListUser,
      })

   }
   
  handelSubMit=(event)=>{
    
    event.preventDefault();
    
     this.props.nhapLieu(this.state.listuser)
     this.setState({
      listuser:{
        userName:"",
        numOfSeat:"",
        seat:[],
        total:0,
    }
     })
  }

  render() {
    
    return (
      <form onSubmit={this.handelSubMit}>
      <div className='form__top row pb-5'>
        <div className='form__left col-6 d-flex flex-column'>
            <label>Name<span>*</span></label>
            <input type="text" id='username'  name='userName' onChange={this.handelOnChange}  />
        </div>
        <div className='form__right col-6 d-flex flex-column'>
            <label> Number of Seats
                            <span>*</span></label>
            <input type="number"  name='numOfSeat' id='numOfSeat' onChange={this.handelOnChange} />
        </div>

      </div>
      <button type='submit' className='mb-4'>Start Selecting</button>
      </form>
    )
  }
}
const mapDispatchToProps=(dispatch)=>{
      return{
          nhapLieu:(data)=>{
             
             dispatch(nhapLieu(data))
          }
      }
}

export default connect(null,mapDispatchToProps) (Form)