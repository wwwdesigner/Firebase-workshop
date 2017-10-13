import React, {Component} from 'react';
import './App.css';
import {database} from './firebase'

class App extends Component {


    componentWillMount() {
                    database.ref('userList').orderByChild('name/first').once('value')
                        .then((snapshot)=> {
                            snapshot.forEach((childSnapshot) => {
                                console.log(childSnapshot.val().name.first)
                            })
                        })
    }

    render() {
    return (
        <div></div>
    );
  }
}

export default App;
