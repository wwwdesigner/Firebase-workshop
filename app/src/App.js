import React, {Component} from 'react';
import './App.css';
import {database} from './firebase'

class App extends Component {

    componentWillMount() {
        database.ref("/").once('value', (snapshot) => {
            // console.log('snapshot', snapshot)
            // console.log('snapshot data', snapshot.valueOf())
            snapshot.forEach((childSnapshot)=>{
                console.log(childSnapshot.val());
            })
        })
    }

    render(){
    return (
      <div>
       App
      </div>
    );
  }
}

export default App;
