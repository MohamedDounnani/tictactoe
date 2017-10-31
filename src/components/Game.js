import React from 'react';
import '../css/index.css';
import Board from './Board.js'
import {calculateWinner,
        restartGame,
        handleClick,
        jumpTo,
        handleChange
      } from './functions.js'
import Radio from './Radio.js'

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {history: [{
      squares: Array(9).fill(null),
      background_color : Array(9).fill("white"),
    }],
    stepNumber: 0,
    xIsNext: true,
    color : "black",
    //color_x_o: "black",
  };
  }

  /*handleSubmit(formSubmitEvent){
    formSubmitEvent.preventDefault();
    this.setState({
      color_x_o : this.state.checked
    });
  }*/

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const background_color = current.background_color;
    const winner = calculateWinner(current.squares);
    const length = current.squares.length;
    let full = 0; //variabile che tiene in memoria quanti squares sono riempiti
    let disable = true; //variabile per attivare o disattivare il button
    let status; //variabile per cambiare lo status
    const moves = history.map((object,move) =>{
    const desc = move ? 'Go to move #' + move :
    'Go to game start';
    return (
      <li key={move}>
      <button onClick={() => jumpTo(move,this)}>{desc}</button>
      </li>
    );
    });

    for(let i =0 ; i<length; i++){
      if(current.squares[i]!=null){
        full += 1;
      }
    }

    if(winner){
      for(let i=0; i<winner[0].length; i++){
        background_color[winner[0][i]] = "green";
      }
      disable  = false;
      status = 'The winner is: ' + winner[1][0] ;
    }
    else {
      if(full===length){
        disable = false;
        status = "Premi Reset";
      }
      else{
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : '0');
      }
    }

    return (
        <div className="game">
        <div className="game-board">
          <div className="status">{status}</div>
          <Board
          squares={current.squares}
          onClick={(i) => handleClick(i,this)}
           background_color={current.background_color}
           color={this.state.color}/>
        </div>
        <div className="game-info">

          <ol>{moves}</ol>
          <ol><button onClick={() => restartGame(this)}
          disabled={disable} >Reset game</button></ol>
          </div>
          <div>
          Choose Color:
        <Radio color={this.state.color}
               onChange={(changeEvent) => handleChange(changeEvent,this)}
               submit={(formSubmitEvent) => this.handleSubmit(formSubmitEvent)}
        />
          </div>
      </div>

    );
  }
}

export default Game;
