import React, {Component} from 'react';
import './App.css';
import {database} from './firebase'

class App extends Component {


    componentWillMount() {
        for (let i = 0; i < 100; i++) {
            fetch('http://cors-proxy.htmldriven.com/?url=https://randomuser.me/api')
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    let userData = JSON.parse(data.body).results[0]
                    database.ref('userList').push(userData)
                })
        }
    }

    render() {
    return (
        <div></div>
    );
  }
}

export default App;
