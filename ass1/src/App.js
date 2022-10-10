import logo from './logo.svg'; 
import './App.css'; 
 
 
import React, { Component } from 'react' 
 
export default class App extends Component { 
 
  constructor(props){ 
    super(props) 
    this.state={ 
      names: [],//filtered names
      ages: [],//filtered ages
      arr: 
      [{name: 'Ahmad', age: 30}, 
      {name: 'Yousef', age: 12}, 
      {name: 'Shatha', age: 14}, 
      {name: 'Rana', age: 22}, 
      {name: 'Osama', age: 22}, 
      {name: 'Ahmad', age: 38} ] 
    } 
  } 
 
 
 
  FunDeleteDuplication=()=>{  
    let namearr=[];//filtered names
    let agearr=[];  //filtered ages
    let newVar = "";//variable to use it with marking duplicated names and ages
    for(let i=0;i<6;i++){  
      for(let j=0; j<6;j++){  
        if(this.state.arr[i].name===this.state.arr[j].name){//check if current users name is duplicated  
          newVar = "nameduplicated"//mark current users name is duplicated
        }  
      
        if(this.state.arr[i].age===this.state.arr[j].age){//check if current users age is duplicated
          newVar += "ageduplicated"//mark current users age is duplicated
        }  
      }  
  
      if (newVar ==="nameduplicatedageduplicated"){//check if both of name and age are duplicated for current user
        newVar = ""; 
        if(!namearr.includes(this.state.arr[i].name))//check if duplicated name added before to namesarr or not, if not add it
          namearr.push(this.state.arr[i].name)
        if(!agearr.includes(this.state.arr[i].age))//check if duplicated age added before to agearr or not, if not add it
          agearr.push(this.state.arr[i].age)
        continue; 
      } 
      if(newVar!=="nameduplicated"){//check if just name duplicated for current user
        namearr.push(this.state.arr[i].name) 
      } 
      if(newVar!=="ageduplicated"){//check if just age duplicated for current user
        agearr.push(this.state.arr[i].age) 
      } 
      newVar=""//reset newVar to use it while checking other users
    } 
    return{//return filtered names and ages as an object
      names: namearr,
      ages: agearr
    };  
  } 

  deleteUser = () => {
    //delete last name and age here using pop() or slice(index,length)

  }

  componentDidMount(){//filter duplicated users when page shown to user
    let result = this.FunDeleteDuplication(this.state.arr); //filtered names and ages. object {name: [], ages: []}
    this.setState({
      names: result.names,
      ages: result.ages
    })
  }
 
  render() { 
    return ( 
      <div> 
        <ul>{/*show filtered names using map function */}
          {
            this.state.names.map((user, idx) => <li key={idx}>{user}</li>)
          }
        </ul>
        <ul>{/*show filtered ages using map function */}
          {
            this.state.ages.map((age, idx) => <li key={idx}>{age}</li>)
          }
        </ul>
        <button onClick={this.deleteUser}>Delte last element</button>  
      </div>  
    ) 
  } 
 
  }