import React from 'react';

/*
sono presenti tutte le funzioni che utilizzo per far funzionare il programma.
- calculateWinner: Riceve come paramentro di input la fase corrente di gioco (squares)
 e controlla se c'è un vincitore. La variabile di controllo consiste in un array in cui si sono tutti i possibili esiti di vittoria.
Se nella fase corrente è presente un esito viene salvato in un'altro array insieme al simbolo vincente e viene mandato in output
quest'ultimo.
- Squares: Riceve come paramentro di input i paramentri descritti nella spiegazione di Board e per ognuno di essi viene correllato nella sua
 funzione.
- restartGame: Riceve come paramentro l'istanza corrente e si occupa semplicemente di settare lo stato alle condizioni iniziali.
 Viene triggerato dal Reset button
- handleClick: Riceve come paramentro la posizione corrente(il quadrato visualizzato nella web app)
 e si occupa come suggerisce il nome di gestire i click fatti dall'utente nel board.
In una situazione in cui l'utente clicca su un quadrato già occupato da un simbolo non succede nulla in quanto
non è permesso modificare le mosse.
In una situazione di vittoria non è possibile proseguire. Inoltre ad ogni click, il buffer History ingloba la nuova fase della partita.
- jumpTo: Riceve come paramentro iniziale la fase della partita desiderata e si occupa di far vedere attraverso una modifica dello stato, la
 fase desiderata.
- handleChange: Una funzione che riceve come paramentri iniziali ChangeEvent(triggerato dal radio button) e l'istanza.
Si occupa di modificare l'elemento color presente nello stato.
In base al colore ricevuto dal radio button il checked cambia il suo valore rispetto ad esso.
*/

export const calculateWinner = squares =>{
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [1, 4, 7],
    [0, 3, 6],
    [2, 5, 8],
  ];
  const array = Array(2).fill(null);
  for (let i=0 ; i<lines.length; i++){
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
      array[0]=lines[i];
      array[1]=squares[a];
      return array;
    }
  }
    return null;
}

export const  Square = props => {
    return (
      <button className="square" onClick=
      {props.onClick} style={{backgroundColor: props.background_color,
                              color : props.color}}>

      {props.value}
      </button>
    );
}

export const restartGame = (object) =>{
  object.setState({
    history: [{
      squares: Array(9).fill(null),
      background_color: Array(9).fill("white"),
    }],
    stepNumber: 0,
    xIsNext: true,
    color : "black",
    //color_x_o: "black",
  });
}

export const handleClick = (i,object) =>{
  const history = object.state.history.slice(0,
    object.state.stepNumber +1);
  const current = history[history.length -1];
  const squares = current.squares.slice();
  const background_color = current.background_color.slice();
  const colored_squares = calculateWinner(squares);
  if(colored_squares || squares[i] ){
    return;
  }
  squares[i] = object.state.xIsNext ? 'X' : 'O';

  object.setState({
      history: history.concat([
        {
          squares : squares,
          background_color : background_color
        }
      ]) ,
      stepNumber: history.length,
      xIsNext: !object.state.xIsNext,
      });
}

export const jumpTo = (step,object) =>{
        object.setState({
        stepNumber : step,
        xIsNext : (step%2) === 0
      });}

export const handleChange = (changeEvent,object) =>{
  object.setState({
    color : changeEvent.target.value
  });
}
