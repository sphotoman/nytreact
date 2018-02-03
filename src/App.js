import React, { Component } from 'react';
import { Homepage } from './pages/Homepage';
import { Jumbotron } from './components/Jumbotron';
import { Search } from './components/Search';
// import { Results } from './components/Results';
import { Saved } from './components/Saved';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ToggleDisplay from 'react-toggle-display';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron />
        <Search />
        <Saved />
      </div>
    );
  }
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = { show: false };
//   }
 
//   handleClick() {
//     this.setState({
//       show: !this.state.show
//     });
//   }
 
//   render() {
//     return (
//       <div className="App">
//         <p className="App-intro">
//           <button onClick={ () => this.handleClick() }>Toggle things</button>
//         </p>
//         <ToggleDisplay show={this.state.show}>
//           I am rendered in a span (by default) and hidden with display:none when show is false.
//         </ToggleDisplay>
 
//         <ToggleDisplay if={this.state.show} tag="section">
//           I am rendered in a section and removed from the DOM when if is false.
//         </ToggleDisplay>
//       </div>
//     );
//   }
// }
 

export default App;
