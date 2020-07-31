import React , { Component } from 'react';
import API_URI from './../store/utils.js';
import axios from 'axios';


class Form extends Component {

  constructor(props) {
    super(props);
      this.state = {
          title: '',
          description: '',
        }

    }

handleSubmit (event){
  event.preventDefault();
  axios.post(`${API_URI}/add`, {
    title: this.state.title,
    description: this.state.description,
  })
  .then(res=>{
    window.location.reload();
    console.log(res.data)
})
}

render(){
    return  <form onSubmit={this.handleSubmit} id="myForm" >
            <input type="text" name="title" value={this.state.title} onChange={e => this.setState({ title: e.target.value })} placeholder="Nouvelle Tache" required/>
            <input type="text" name="description" value={this.state.description} onChange={e => this.setState({ description: e.target.value })} placeholder="description"/>
            <button action='/' type="Submit" onClick={e => this.handleSubmit(e)} value="Submit" >Ajouter</button></form>
}
}
export default Form;
