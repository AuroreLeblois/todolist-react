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
      items:[],
      isLoaded: false,
    }
  };

componentDidMount(){
  fetch(API_URI)
  .then(res=>res.json())
  .then(json=> {
      this.setState({
        items:json,
        isLoaded:true,
      })
  });
}


render() {
  const{items, isLoaded}=this.state;
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
           <Form/>
          <ul className="Todos">

          {items.map(item=>(
            <li key={item.id}>
           <p className="newTask"><TrashButton/> <strong>{item.title}</strong> </p>
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
