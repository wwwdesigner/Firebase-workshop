import React, {Component} from 'react';
import './App.css';
import {database} from './firebase'

class App extends Component {


    componentWillMount() {
                    database.ref('userList').orderByChild('email').equalTo('jenny.king@example.com').once('value')
                        .then((snapshot)=> {
                            snapshot.forEach((childSnapshot) => {
                                console.log(childSnapshot.val().name)
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
