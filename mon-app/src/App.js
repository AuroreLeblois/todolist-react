import React , { Component } from 'react';
import TrashButton from './components/trash_bin';
import Time from './components/time.js';
import Form from './components/addTask.js';
import API_URI from './store/utils.js'
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todolist:[],
      success: false,
      isLoaded: false,
    }
  };

componentDidMount(){
  fetch(API_URI)
  .then(res=>res.json())
  .then(result=> {
      this.setState({
        todolist:result.todolist,
        isLoaded:true,
        success: true,
      })
  });
}

onChange= event =>{


}

handleChange=event=>{

this.setState({
})

}

render() {
  const{todolist, isLoaded, success}=this.state;
  if(!isLoaded){
    return <div>Loading.... </div>
  }
  else {
    return (
      <div className="App">
        <header className="App-header">

         <h1>Todolist</h1>

         <Time/>
          <div className="Todolist">
           <Form onSubmit={this.handleChange}/>
          <ul className="Todos"
          onChange={this.onChange()}>

          {todolist.map(item=>(
            <li key={item.id}>
           <p className="newTask"><TrashButton/> {item.id} <strong>{item.title}</strong> </p>
           <p>{item.description}</p>
            </li>
          ))}
          </ul>
          </div>
        </header>
      </div>
    );
  }
}
}

export default App;
