import React, { Component } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
import ReactSearchBox from 'react-search-box';
import './Home.css';
import InfiniteScroll from 'react-infinite-scroll-component';
const Alldata = [
    {
      id:'1',
      key: 'john',
      value: 'John Doe',
      Name:'John Doe',
      first_name:'John',
      last_name:'Doe',
      email:null,
      phone_number: "9404480524",
      country_id: 226,
      Address : "First Bom,USE",
     
    },
    { id:'3',
      key: 'mary',
      value: 'Mary Phillips',
      Name:'Mary Phillips',
      first_name:'Mary',
      last_name:'Phillips',
      email:null,
      phone_number: "9404480524",
      country_id: 226,
      Address : "First Bom,USE"

    },
    {
        id:'4',
      key: 'robert',
      value: 'Robert',
      Name:'Robert',
      first_name:'Robert',
      last_name:'Phillips',
      email:null,
      phone_number: "9404480524",
      country_id: 226,
      Address : "First Bom,USE"

    },
    {
        id:'5',
      key: 'karius',
      value: 'Karius',
      Name:'Karius',
      first_name:'Karius',
      last_name:'Deo',
      email:null,
      phone_number: "9404480524",
      country_id: 230,
      Address : "First Bom,USE"
      
    },
    {
        id:'6',
      key: 'karius',
      value: 'Karius',
      Name:'Karius',
      first_name:'Karius',
      last_name:'Deo',
      email:null,
      phone_number: "9404480524",
      country_id: 230,
      Address : "First Bom,USE"
      
    },
    {
        id:'7',
      key: 'robert',
      value: 'Robert',
      Name:'Robert',
      first_name:'Robert',
      last_name:'Phillips',
      email:null,
      phone_number: "9404480524",
      country_id: 226,
      Address : "First Bom,USE"

    },

  ]
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
      items: Array.from({ length: 20 }),
      data:Alldata

    }

    
  }
  componentDidMount() {
    // const headers = {
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNzEiLCJleHAiOjE2MDM3ODM0Mzd9.3ievseHtX0t3roGh7nBuNsiaQeSjfiHWyyx_5GlOLXk'
    //   }
    // axios.get(`https://api.dev.pastorsline.com/api/contacts.json`,{
    //     headers:headers
    // })
    //   .then(res => {
    //       console.log(res);
          
    //   })
    let params = {
        companyId: 171,
        query: 'A',
        page: 1,
        countryId: 226
      }


      const URL ='https://api.dev.pastorsline.com/api/contacts.json';
      const AuthStr = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNzEiLCJleHAiOjE2MDM3ODM0Mzd9.3ievseHtX0t3roGh7nBuNsiaQeSjfiHWyyx_5GlOLXk'; 
        axios.post(URL,params, { headers: { Authorization: AuthStr } })
        .then(response => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log('error ' + error);
        });
  }
  
  setModalA(){
    this.setState({
      modalA:!this.state.modalA,
      modalB:false
    })
    this.props.history.push('/allContact')
  };

  closeModalA(){
    this.setState({
      modalA:!this.state.modalA,
      modalB:false
    })
    this.props.history.push('/')
  };

  setModalB(){
    this.setState({
      modalB:!this.state.modalB,
      modalA:false

    })
    this.props.history.push('/USContact')

  };

  closeModalB(){
    this.setState({
        modalB:!this.state.modalB,
        modalA:false
  
      })
      this.props.history.push('/')
  
  };

  setModalC(item){
    this.setState({
        modalC:!this.state.modalC,
        modalA:false,
        modalB:false,
        selectedValueDetail: item


    })
    
  };

  closeModalC(){
    this.setState({
        modalC:!this.state.modalC,
        modalA:false,
        modalB:false,
    })
    this.props.history.push('/')
    
  };

  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 1500);
  };

  onlyOddForAllContant=() =>{
    var checkBox = document.getElementById("myCheck");
        
        if (checkBox.checked === true){
            let oddData = [];
            for(let item of Alldata){
                if(item.id % 2){
                    oddData.push(item)
                }
            }
            console.log(oddData);
            this.setState({
                data:oddData
            })
          } else {
            this.setState({
                data:Alldata
            })
          }
        
  }

  onlyOddForUSContant=() =>{
    var checkBox2 = document.getElementById("myCheck2");
        
        if (checkBox2.checked === true){
            let oddData = [];
            for(let item of Alldata){
                if(item.id % 2){
                    oddData.push(item)
                }
            }
            console.log(oddData);
            this.setState({
                data:oddData
            })
          } else {
            this.setState({
                data:Alldata
            })
          }
        
  }
  
 
  
  
  render(){
      let { selectedValueDetail } = this.state;
    return (
      <div className="App">
        <header className="App-header" style={{minHeight: 20}}>
          Demo
        </header>
        <div style={{width:'100%'}}>

            <Button className="modalAButtonColor" style={{margin:10}} onClick={()=>this.setModalA()}>All Contacts</Button>
            <Button className="modalBButtonColor" style={{margin:10}} onClick={()=>this.setModalB()} >US Contacts</Button>

            <div>
                <h1>demo: react-infinite-scroll-component</h1>
                <hr />
                <InfiniteScroll
                    dataLength={this.state.items.length}
                    next={this.fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    >
                    {this.state.items.map((i, index) => (
                        <div style={style} key={index}>
                        div - #{index}
                        </div>
                    ))}
                </InfiniteScroll>
            </div>
        </div>
        {/* =============modal A=============== */}
        <Modal isOpen={this.state.modalA} centered={true} >
            <ModalHeader >
                All Contacts   
            </ModalHeader>
            <ModalBody>
               
                <div>
                    <ReactSearchBox
                        placeholder="Placeholder"
                        value=""
                        data={this.state.data}
                        callback={record => console.log(record)}
                        onSelect={record =>this.setModalC(record)}
                    />
                </div>
                <div  className="scroll">
                    {this.state.data.map((item,index)=>(
                        <div onClick={()=>this.setModalC(item)} className="contactDiv">
                            <h4>{item.first_name} {item.last_name}</h4>
                            <p>{item.Name}</p>
                        </div>
                    )
                    )}
                    
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
            <ModalBody>
                <div>
                    <ReactSearchBox
                        placeholder="Placeholder"
                        value=""
                        data={this.state.data}
                        callback={record => console.log(record)}
                        onSelect={record =>this.setModalC(record)}
                    />
                </div>
                <div className="scroll">
                    {this.state.data.map((item,index)=>(
                        <div onClick={()=>this.setModalC(item)} className="contactDiv">
                            <h4>{item.first_name} {item.last_name}</h4>
                            <p>{item.Name}</p>
                        </div>
                    )
                    )}
                    
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
                {selectedValueDetail.Name} Contact Detail
            </ModalHeader>
            <ModalBody>
                <div className="contactDiv">
                    <h3>{selectedValueDetail.first_name} {selectedValueDetail.last_name}</h3>
                    <h6>mobile Number : {selectedValueDetail.phone_number}</h6>
                    <p>Address : {selectedValueDetail.Address}</p>
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


export default Home;