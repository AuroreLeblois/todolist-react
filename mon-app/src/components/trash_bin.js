
import React , { Component } from 'react';

class TrashButton extends Component {


  handleDeletion(evt){
      evt.preventDefault();
    console.log('tu as cliqué sur le button de suppresion ! ')
    // const newState = this.state.slice();
    // newState.splice(newState.indexOf(evt), 1)
    // this.setState({
    //   data: newState
    // })
    };

render(){
return <button  onClick={e => this.handleDeletion(e)}>X</button>
}
}
export default TrashButton;
