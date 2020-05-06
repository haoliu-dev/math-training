import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">      
    <div className="container-fluid">
      <Sheet count="66" />  
    </div>
      
    </div>
  );
}

export default App;

const OPERATION = ['+', '-'];
class Question extends React.Component {
  render() {
    const op1 = Math.floor(Math.random() * 100);
    const op2 = Math.floor(Math.random() * 100);
    const operation = OPERATION[Math.floor(Math.random() * 100) % OPERATION.length];
    return (
      <div className="col-4 question">{op1} {operation} {op2} = </div>

    );
  }
}

class Sheet extends React.Component {
  render() {
    const count = parseInt(this.props.count) || 100;
    const questions = (Array(count).fill(1)).map(x => (<Question />));
    return <div className="row">{questions}</div>
  }
}