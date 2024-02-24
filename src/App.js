import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import data from './Data';

class App extends Component{
    constructor(){
      super();
      this.state = {
          studentList: data,
          defaultBranch:"all"
      }
    }
    addNewRecord = ()=>{
    //  window.alert(this.roll.value);
       let newStudent ={roll : this.roll.value , name : this.name.value , branch :this.branch.value, mobile: this.mobile.value}
       this.setState({ studentList : [...this.state.studentList, newStudent]});
       window.alert("...called");
    }                 
    deleteRecord = (roll)=>{
       if(window.confirm("Are you Sure")){
           let index = this.state.studentList.findIndex((student)=>student.roll == roll);
           this.state.studentList.splice(index,1);
           this.setState({studentList :[...this.state.studentList]});
       }
    }   
    render(){
      return <>
           <div className='container-fluid bg-danger'>
                <h5 className='text-center text-white p-3'>Student App</h5>
           </div>
           <div className='container mt-4 '>
                <div className='row'>
                      <div className='col-md-6'>
                          <div className='form-group'>
                                <input ref={(rollInput)=>this.roll=rollInput} type='text' placeholder='Student Roll Number' className='form-control'/>
                          </div>
                      </div>  
                      <div className='col-md-6'>
                          <div className='form-group'>
                              <input ref={(nameInput)=>this.name=nameInput}type='text' placeholder='Enter Student Name' className='form-control'/>
                          </div>
                      </div>  
                </div> 
                <div className='row'>
                     <div className='col-md-6'>
                          <div className='form-group'> 
                               <select ref={(branchInput)=>this.branch=branchInput} className='form-control'>
                                   <option>Select branch </option>
                                   <option value="CS">CS</option>
                                   <option value="IT">IT</option>
                                   <option value="MECH">MECH</option>
                                   <option value="EC">EC</option>
                               </select>
                          </div>
                     </div>
                     <div className='col-md-6'>
                         <div className='form-group'>
                         <input ref={(mobileInput)=>this.mobile = mobileInput} type='text' placeholder='Enter Contact No' className='form-control'/>
                         </div>
                     </div>
                </div> 
                <div className='row'>
                      <div className='col-md-6'>
                          <div className='form-group'>
                               <button onClick={this.addNewRecord} className='btn btn-secondary'>ADD</button>
                          </div>
                      </div>
                      <div className='col-md-6 d-flex'>
                             <button onClick={()=>this.setState({defaultBranch:"CS"})}className='btn btn-primary ml-2 p-1'>CS :({this.state.studentList.filter((student)=>student.branch=="CS").length})</button>
                             <button onClick={()=>this.setState({defaultBranch:"IT"})}className='btn btn-danger ml-2'>IT :{this.state.studentList.filter((student)=>student.branch=="IT").length}</button>
                             <button onClick={()=>this.setState({defaultBranch:"EC"})}className='btn btn-warning ml-2'>EC :{this.state.studentList.filter((student)=>student.branch=="EC").length}</button>
                             <button onClick={()=>this.setState({defaultBranch:"MECH"})}className='btn btn-info ml-2'>MECH :{this.state.studentList.filter((student)=>student.branch=="MECH").length}</button>
                             <button onClick={()=>this.setState({defaultBranch:"all"})}className='btn btn-secondary ml-2'>TOTAL :{this.state.studentList.length}</button>
                      </div>
                </div>
                <div className='container mt-4'>
                        <table className='table'>
                            <thead>
                            <tr>
                                <th>S.no</th>
                                <th>Roll number</th>
                                <th>Name</th>
                                <th>Branch</th>
                                <th>Mobile</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                                {this.state.studentList.filter((student)=>student.branch==this.state.defaultBranch || this.state.defaultBranch=="all"). map((student,index) => <tr key={index}>
                                 <td>{index + 1}</td>
                                 <td>{student.roll}</td>
                                 <td>{student.name}</td>
                                 <td>{student.branch}</td>
                                 <td>{student.mobile}</td>
                                 <td><button onClick={this.deleteRecord} className='btn btn-danger'>Delete</button></td>
                                </tr>)}
                            </tbody>
                        </table>
                </div>
           </div>
      </>
    }
}
export default App;
