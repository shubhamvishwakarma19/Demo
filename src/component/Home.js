import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
import './Home.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getEmployeList , addNewEmployes,updateEmployes,resetData,deleteEmployes} from '../action/action';
import profileImg from '../image/profile.png';
class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      addNew:false,
      employeList:[],
      employeName:'',
      employeAge:'',
      employeSalary:'',
      showError:false,
      employeDetail:''
    }

    
  }
  componentDidMount() {
    this.props.getEmployeList();
    // let searchValue = "";
    // this.props.ContactAll(searchValue,this.state.currentPageAll);
    // this.props.contactUSAll(searchValue,this.state.currentPageUs);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps){
      console.log(nextProps)

      if(nextProps.employeList && nextProps.employeList.employeList){
        this.setState({
          employeList: nextProps.employeList.employeList,
          addNew: false
        })
        // let map = nextProps.AllContactValue.AllContactFromAPI;
        // const result = Object.keys(map).map((key) => map[key]);
       
        // if(this.state.loadingForAll){
        //   let oldValue = this.state.allContactData;
        //   for(let item of result){
        //     oldValue.push(item)
        //   }
        //   this.setState({
        //     allContactData : oldValue
        //   })
        // }else{
        //   this.setState({
        //     allContactData : result
        //   })
        }
      }

  }
  addNew(){
    this.setState({
      addNew: !this.state.addNew,
      employeDetail:''
    })
  }
  openDetail(item){
    this.setState({
      employeDetail: item,
      addNew: true,
      employeName: item.employee_name,
      employeAge:item.employee_age,
      employeSalary:item.employee_salary
    })
  }
  
  submitData(){
    const {employeName ,employeAge,employeSalary,employeDetail} = this.state;
    this.setState({
      showError: false
    },()=>{
      if(!employeName && !employeAge && !employeSalary){
        this.setState({
          showError: true
        })
        return;
  
      }

      let sendRequest={
        name:employeName,
        salary:employeSalary,
        age:employeAge
      }

      if(employeDetail){
        this.props.updateEmployes(sendRequest ,employeDetail.id);

      }else{
      this.props.addNewEmployes(sendRequest);
        
      }
    })
    
    
  }
  
  
  
  
  render(){
      const { employeList ,addNew ,employeName ,employeAge,employeSalary,employeDetail} = this.state;
    return (
      <div className="App">
       
       
               <p className="employeListtitle"> Employe List </p>
               <div style={{textAlign:"right"}}>

               <Button className="modalAButtonColor" style={{margin:10}} onClick={()=>this.addNew()}>Add New</Button>
             </div>
                <div className="TableOuter">
                    {employeList && employeList.length > 0 && employeList.map((item,index)=>(
                        <div key={index}  className="ListContianer">
                          <div style={{width:100}} >

                          <img className="profileImg" src={(item && item.profile_image)? item.profile_image:profileImg} alt="profile" 
                          onError={e => {
                            e.target.onerror = null;
                            e.target.src = profileImg;
                          }}
                          />
                          
                          </div>
                          <div className="boxDiv">{item.employee_name}</div>
                          <div className="boxDiv">{item.employee_age}</div>
                          <div className="boxDiv">{item.employee_salary}</div>
                          <div className="boxDiv">
                          <Button className="modalCButtonColor" onClick={()=>this.openDetail(item)}>Detail</Button>
                          <Button className="deleteButton" onClick={()=>this.props.deleteEmployes(item.id)}>Delete</Button>
                          
                          </div>

                            
                        </div>
                    )
                    )}
                    
                </div>
    

        <Modal isOpen={addNew} centered={true} size="sm" toggle={()=>this.addNew()}>
            <ModalHeader >
              {employeDetail? 'Update' : 'Add New'} Employe
            </ModalHeader>
            <ModalBody>
              {this.state.showError&&<p className="errorMsg">All field required</p>}
            <div>
            <p className="fieldlabel">Enter name</p>
            <input type="text" placeholder="Enter name" onChange={(evt)=>{
              this.setState({
                employeName:evt.target.value
              })
            }}
            value={employeName}
            
            />
            </div>
            <div>
            <p className="fieldlabel">Enter Age</p>
            <input type="text" placeholder="Enter Age" 
            pattern="[0-9]*"
            onChange={evt => {
              const employeAge = evt.target.validity
                .valid
                ? evt.target.value
                : this.state.employeAge;
              this.setState ({
                employeAge,
              });
            }}
            value={employeAge}

            />
            </div>
            <div>
            <p className="fieldlabel">Enter Salary</p>
            <input type="text" placeholder="Enter Salary" 
            pattern="[0-9]*"
            value={employeSalary}
            onChange={evt => {
              const employeSalary = evt.target.validity
                .valid
                ? evt.target.value
                : this.state.employeSalary;
              this.setState ({
                employeSalary,
              });
            }}

            />
            </div>

            <div style={{width:'100%', textAlign:'center'}}>
            <Button className="submitButton" onClick={()=>this.submitData()}>Submit</Button>
            
            </div>
              
            </ModalBody>
            <ModalFooter>
                    <div style={{width:'100%', textAlign:'right'}}>
                        <Button className="modalCButtonColor" onClick={()=>this.addNew()}>Cancel</Button>
                    </div>
            </ModalFooter>
        </Modal>

      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    employeList: state.EMPLOYE,

  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      getEmployeList,
      addNewEmployes,
      updateEmployes,
      deleteEmployes,
      resetData
  }, dispatch)
};

export default connect (mapStateToProps, mapDispatchToProps) (Home);
