import React from 'react';
import '../css/index.css';
import {Square} from './functions.js'



/*
Classe che si occupa di formare il campo(9 quadrati)
Nel render richiamo una funzione che per ogni "quadrato" creato si occupa di passare dei paramentre a <Square />, nello specifico:
- value: value corrente del simbolo che viene preso da squares ricevuto da Game
- backgroud-color: tiene sotto controllo il backgourd-color e al momento opportuna(alla vittoria) viene cambiato
- color: colore corrente del simbolo
*/

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}  background_color={this.props.background_color[i]} color={this.props.color}/>
  );}

  render() {
      return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
