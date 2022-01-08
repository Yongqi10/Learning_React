import React, {Component} from 'react';



// <> HTML {}JS
class App extends Component {
  render() {
    let flag = false;
    return (
      <ul className='my-list'>
        <li>{flag? 'Hello World': "Hello World2"}</li>
        <li>lalala</li>
      </ul>
    );
  }

}

export default App;
