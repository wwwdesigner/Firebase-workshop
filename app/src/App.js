import React, { Component } from 'react';
import './App.css';
import { database } from './firebase'

class App extends Component {

    componentWillMount(){
        database.ref("/").remove()
            .then (() => {
            alert('usunięto!')
        });
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
