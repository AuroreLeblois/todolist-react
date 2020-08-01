import React , { Component } from 'react';

class Time extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }

  componentDidMount() {
  this.intervalID = setInterval(
    () => this.tick(),
    1000
  );
}
componentWillUnmount() {
  clearInterval(this.intervalID);
}
tick() {
  this.setState({
    time: new Date().toLocaleString()
  });
}

 render() {
return  <div><h2>{new Date().toLocaleDateString()}</h2>
        <h3>{this.state.time}</h3>
        </div>
}



}

export default Time
