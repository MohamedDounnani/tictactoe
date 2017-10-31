import React from 'react';

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
      {props.onClick} style={{backgroundColor: props.color,
                              color : props.checked}}>

      {props.value}
      </button>
    );
}

export const restartGame = (object) =>{
  object.setState({
    history: [{
      squares: Array(9).fill(null),
      color : Array(9).fill("white"),
    }],
    stepNumber: 0,
    xIsNext: true,
    checked : "black",
    //color_x_o: "black",
  });
}

export const handleClick = (i,object) =>{
  const history = object.state.history.slice(0,
    object.state.stepNumber +1);
  const current = history[history.length -1];
  const squares = current.squares.slice();
  const color = current.color.slice();
  const colored_squares = calculateWinner(squares);
  if(colored_squares || squares[i] ){
    return;
  }
  squares[i] = object.state.xIsNext ? 'X' : 'O';

  object.setState({
      history: history.concat([
        {
          squares : squares,
          color : color
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
    checked : changeEvent.target.value
  });
}
