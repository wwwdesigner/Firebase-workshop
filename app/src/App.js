import React, {Component} from 'react';
import './App.css';
import {database} from './firebase'

class App extends Component {

    state = {
        valueFromDatabase : 'początkowy stan'
    }

    componentWillMount() {
        database.ref("/").on('value', (snapshot)=>{
            this.setState({
                valueFromDatabase: JSON.stringify(snapshot.val())
                })
        })
    }

    render(){
    return (
      <div>
          {this.state.valueFromDatabase}
      </div>
    );
  }
}

export default App;
