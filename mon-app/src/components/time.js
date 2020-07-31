import React , { Component } from 'react';

class Time extends Component {
 render() {
return <h2>{new Date().toLocaleDateString()}</h2>
}
}

export default Time
