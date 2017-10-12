import React, { Component } from 'react';
import './App.css';
import { database } from './firebase'

class App extends Component {

    componentWillMount(){
        database.ref("my/first/path").set("it works");
    }

    render() {

    return (
      <div>
       App
      </div>
    );
  }
}

export default App;
