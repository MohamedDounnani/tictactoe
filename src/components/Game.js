/*
La classe padre, in cui setto lo stato iniziale ed invio i paramentri necessari alle classi figlie
*/
import React from 'react';
import '../css/index.css';
import '../css/radio.css';
import '../css/board.css';
import '../css/square.css';
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
    /*
    un buffer che tiene in memoria tutte le fasi della partita, composto da, squares(array di 9 elementi) e background-color(array di 9 elementi che tiene il backgound-color di squares)
    */
    this.state = {history: [{
      squares: Array(9).fill(null),
      background_color : Array(9).fill("white"),
    }],
    stepNumber: 0, //una varibiale che tiene conto dell'avanzamento della partita, inizializzata a 0
    xIsNext: true, //una variabile booleana inizializzata a true, che tiene conto dei torni. Se true tocca a X se false tocca a O
    color : "black", //una variabile stringa in cui memorizzo il colore dei simboli, inizializzato a black che è il colore di default
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
    const titolo="Welcome to the TicTacToe Game";
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
      <button className="button" onClick={() => jumpTo(move,this)}>{desc}</button>
      </li>
    );
    });
    /*
    Se tutti gli square sono diversi da null restituisce 9
    */
    for(let i =0 ; i<length; i++){
      if(current.squares[i]!=null){
        full += 1;
      }
    }
    /*
    Se c'è un vincitore le mosse vincenti si illuminano
    */
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

      <div><h1 className="titolo">{titolo}</h1></div>

        <div className="board">
          <div className="radio">
            <div><div className="choose_color">Choose Color:</div>
              <Radio color={this.state.color}
                onChange={(changeEvent) => handleChange(changeEvent,this)}
                submit={(formSubmitEvent) => this.handleSubmit(formSubmitEvent)}/>
            </div>
          </div>
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
            <ol><button className="button" onClick={() => restartGame(this)}
            disabled={disable} >Reset game</button></ol>
          </div>

          </div>
      </div>
    );
  }
}

export default Game;
