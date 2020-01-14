import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
import './Home.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import {ContactAll , contactUSAll} from '../action/action';


const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      modalA:false,
      modalB:false,
      modalC:false,
      selectedValueDetail:[],
      allContactData:[],
      USContactData:[],
      inputSearchforAll:'',
      inputSearchforUS:'',
      currentPageAll:1,
      currentPageUs:1,
      searchTextValueAll:'',
      searchTextValueUS:'',
      loadingForAll:false,
      loadingForUS:false


    }
    this.searchForAllContact= this.searchForAllContact.bind(this);

    
  }
  componentDidMount() {
    // let searchValue = "";
    // this.props.ContactAll(searchValue,this.state.currentPageAll);
    // this.props.contactUSAll(searchValue,this.state.currentPageUs);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps){

      if(nextProps.AllContactValue.AllContactFromAPI){
        let map = nextProps.AllContactValue.AllContactFromAPI;
        const result = Object.keys(map).map((key) => map[key]);
       
        if(this.state.loadingForAll){
          let oldValue = this.state.allContactData;
          for(let item of result){
            oldValue.push(item)
          }
          this.setState({
            allContactData : oldValue
          })
        }else{
          this.setState({
            allContactData : result
          })
        }
      }

      if(nextProps.AllContactValue.USAllContactFromAPI){
        let map = nextProps.AllContactValue.USAllContactFromAPI;
        const result = Object.keys(map).map((key) => map[key]);
        if(this.state.loadingForUS){
          let oldValue = this.state.USContactData;
          for(let item of result){
            oldValue.push(item)
          }
          this.setState({
            USContactData : oldValue
          })
        }else{
          this.setState({
            USContactData : result
          })
        }
      }
      
    }
  }
  
  setModalA(){
    this.setState({
      modalA:!this.state.modalA,
      modalB:false,
      loadingForAll:false
    })
    let searchValue = "";
    let page = 1;
    this.props.ContactAll(searchValue,page);
    
    this.props.history.push('/allContact')
   
  };

  closeModalA(){

    this.setState({
      modalA:!this.state.modalA,
      modalB:false,
      loadingForAll:false,
      loadingForUS:false,
      allContactData:[],
      searchTextValueAll:'',


    },()=>{console.log(this.state.allContactData);
    })
    this.props.history.push('/')
  };

  setModalB(){
    this.setState({
      modalB:!this.state.modalB,
      modalA:false,
      loadingForAll:false,
      loadingForUS:false,
      
    })
    let searchValue = "";
    let page = 1;
    this.props.contactUSAll(searchValue,page);
    this.props.history.push('/USContact')

  };

  closeModalB(){
    this.setState({
      modalB:!this.state.modalB,
      modalA:false,
      loadingForAll:false,
      loadingForUS:false,
      USContactData:[],
      searchTextValueUS:''


  
    })
    this.props.history.push('/')
  
  };

  setModalC(item){
    
    this.setState({
        modalC:!this.state.modalC,
        modalA:false,
        modalB:false,
        loadingForAll:false,
        loadingForUS:false,
        
        selectedValueDetail: item


    })
    
  };

  closeModalC(){
    this.setState({
        modalC:!this.state.modalC,
        modalA:false,
        modalB:false,
        loadingForAll:false,
        loadingForUS:false,
        allContactData:[],
        USContactData:[],


    })
    this.props.history.push('/')
    
  };

  fetchMoreDataAll = () => {
    this.setState({
      loadingForAll:true,
      currentPageAll: this.state.currentPageAll+1
    })
    this.props.ContactAll(this.state.searchTextValueAll,this.state.currentPageAll+1)
  };

  fetchMoreDataUS = () => {
    this.setState({
      loadingForUS:true,
      currentPageUs:this.state.currentPageUs+1
    })
    this.props.contactUSAll(this.state.searchTextValueAll,this.state.currentPageAll+1)
  };

  onlyOddForAllContant=() =>{
    var checkBox = document.getElementById("myCheck");
        let AllData = this.state.allContactData;
        if (checkBox.checked === true){
            let oddData = [];
            for(let item of AllData){
                if(item.id % 2 === 0){
                    oddData.push(item)
                }
            }
            this.setState({
              allContactData:oddData
            })
          } else {

            let map = this.props.AllContactValue.AllContactFromAPI;
            const result = Object.keys(map).map((key) => map[key]);
            this.setState({
              allContactData : result
            })
          }
        
  }

  onlyOddForUSContant=() =>{
    var checkBox2 = document.getElementById("myCheck2");
    let AllData = this.state.USContactData;
        
        if (checkBox2.checked === true){
            let oddData = [];
            for(let item of AllData){
                if(item.id % 2 === 0){
                    oddData.push(item)
                }
            }
            this.setState({
              USContactData:oddData
            })
          } else {
            let map = this.props.AllContactValue.AllContactFromAPI;
            const result = Object.keys(map).map((key) => map[key]);
            this.setState({
              USContactData : result
            })
          }
        
  }

  searchForAllContact=(value)=>{
    this.setState({
      searchTextValueAll: value,
      currentPageAll:1
    },()=>{
      this.timer = setTimeout(() => {
        this.props.ContactAll(this.state.searchTextValueAll,this.state.currentPageAll)
         
        }, 1000);
    })
    

  }
  searchForUSContact=(value)=>{
    this.setState({
      searchTextValueUS: value,
      currentPageUs:1
    },()=>{
      this.timer = setTimeout(() => {
        this.props.contactUSAll(this.state.searchTextValueUS,this.state.currentPageUs)
         
        }, 1000);
    })

  }
  
 
  
  
  render(){
    console.log(this.state)
      let { selectedValueDetail , inputSearchforAll} = this.state;
    return (
      <div className="App">
        <header className="App-header" style={{minHeight: 20}}>
          Demo
        </header>
        <div style={{width:'100%'}}>

          <Button className="modalAButtonColor" style={{margin:10}} onClick={()=>this.setModalA()}>All Contacts</Button>
          <Button className="modalBButtonColor" style={{margin:10}} onClick={()=>this.setModalB()} >US Contacts</Button>
        </div>
        {/* =============modal A=============== */}
        <Modal isOpen={this.state.modalA} centered={true} >
            <ModalHeader >
                All Contacts   
            </ModalHeader>
            <ModalBody>
                <div className="padd10">
                  <input className="searchInput" type="text" value={this.state.searchTextValueAll} placeholder="Search" onChange={e=>this.searchForAllContact(e.target.value)}  onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.props.ContactAll(event.target.value,this.state.currentPageUs);
                }
              }}/>
                </div>
                <div>
                  <InfiniteScroll
                    height={200}
                    dataLength={this.state.allContactData.length}
                    next={this.fetchMoreDataAll}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    >
                    {this.state.allContactData && this.state.allContactData.length > 0 && this.state.allContactData.map((item,index)=>(
                        <div key={index} onClick={()=>this.setModalC(item)} className="contactDiv">
                            
                            <h4>{item.first_name} {item.last_name}</h4>
                            <p>{item.id}</p>
                        </div>
                    )
                    )}
                    </InfiniteScroll>
                    
                </div>
              
            </ModalBody>
            <ModalFooter>
              <div style={{width:'100%',display:'inline-flex'}}>
                    <div style={{width:'50%'}}>
                        <input id="myCheck" name="remember" type="checkbox" onClick={()=>this.onlyOddForAllContant()} />{' '}
                        <label>Only even</label>
                    </div>
                    <div style={{width:'50%', textAlign:'right'}}>
                        <Button className="modalAButtonColor" onClick={()=>this.closeModalA()}>Cancel</Button>
                    </div>
              </div>
            </ModalFooter>
        </Modal>

        {/* =============modal B=======setModalC======== */}

        <Modal isOpen={this.state.modalB} centered={true} >
            <ModalHeader >
                US Contacts   
            </ModalHeader>
            <ModalBody>ContactAll
                <div className="padd10">
                  <input className="searchInput" type="text" placeholder="Search" onChange={e=>this.searchForUSContact(e.target.value)} onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.props.contactUSAll(event.target.value,this.state.currentPageUs);
                }
              }}/>
                </div>
                <div>
                  <InfiniteScroll
                    height={200}
                    dataLength={this.state.USContactData.length}
                    next={this.fetchMoreDataUS}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    >
                   {this.state.USContactData &&  this.state.USContactData.length > 0 && this.state.USContactData.map((item,index)=>(
                        <div  key={index} onClick={()=>this.setModalC(item)} className="contactDiv">
                           <h4>{item.first_name} {item.last_name}</h4>
                            <p>{item.id}</p>
                            
                        </div>
                    )
                    )}
                    </InfiniteScroll>
                    
                </div>
            </ModalBody>
            <ModalFooter>
              <div style={{width:'100%',display:'inline-flex'}}>
                    <div style={{width:'50%'}}>
                        <input id="myCheck2" name="remember" type="checkbox"  onClick={()=>this.onlyOddForUSContant()} />{' '}
                        <label>Only even</label>
                    </div>
                    <div style={{width:'50%', textAlign:'right'}}>
                        <Button className="modalBButtonColor" onClick={()=>this.closeModalB()}>Cancel</Button>
                    </div>
              </div>
            </ModalFooter>
        </Modal>

        {/* =============modal C=============== */}

        <Modal isOpen={this.state.modalC} centered={true} >
            <ModalHeader >
             {selectedValueDetail.first_name} Contact Detail
            </ModalHeader>
            <ModalBody>
                <div className="contactDiv">
                    <h3>{selectedValueDetail.first_name} {selectedValueDetail.last_name}</h3>
                    <h6>mobile Number : {selectedValueDetail.phone_number}</h6>
                    <p>ID : {selectedValueDetail.id}</p>
                </div>
               
            </ModalBody>
            <ModalFooter>
              <div style={{width:'100%',display:'inline-flex'}}>
                    <div style={{width:'100%', textAlign:'right'}}>
                        <Button className="modalCButtonColor" onClick={()=>this.closeModalC()}>Cancel</Button>
                    </div>
              </div>
            </ModalFooter>
        </Modal>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    AllContactValue: state.CONTACT,
    // AllUSContactValue: state.USCONTACT,

  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      ContactAll,
      contactUSAll
  }, dispatch)
};

export default connect (mapStateToProps, mapDispatchToProps) (Home);
