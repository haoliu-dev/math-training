import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Sheet count="32" />
      </div>

    </div>
  );
}

export default App;

const OPERATION = ['+', '-'];
class Question extends React.Component {
  render() {
    let op1 = Math.floor(Math.random() * 100);
    let op2 = Math.floor(Math.random() * 100);
    if (op1 < op2) [op1, op2] = [op2, op1];
    const operation = OPERATION[Math.floor(Math.random() * 100) % OPERATION.length];
    return (
      <pre className="col-3 question">{op1}&nbsp;&nbsp;<br /><u>&nbsp;{operation} {op2}&nbsp;&nbsp;</u><br /></pre>

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