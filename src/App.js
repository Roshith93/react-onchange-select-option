import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class App extends Component {
  state = {
    results: [],
    selectedItem: "",
  };
  componentDidMount() {
    
    Axios('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        this.setState({
          results: res.data
        });
      })
      .catch(error => {
        console.log(error);
      });
    
  }
  render() {
    console.log(this.state)
    let userResults = this.state.results.map(result => <option key={result.id}>{result.name}</option>)
    return (
      <div className="App">
         <h1>onchange</h1>
         <select onChange={e => this.setState({selectedItem: e.target.value})}>
         {userResults}
        </select>
        <p>selectedItem : {this.state.selectedItem}</p>
      </div>
    );
  }
}

export default App;
