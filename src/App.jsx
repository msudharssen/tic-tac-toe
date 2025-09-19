import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Square from './Square'

function App(props) {
  const [temp, setArr] = useState(Array(9).fill(null))
  const [xIsNext, setXisNext] = useState(false)
  const winner = calculateWinner(temp);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }
  console.log(status)



  function handleClick(i){
    if(temp[i] || calculateWinner(temp)){
      return
    }
    let copy = temp.slice()
    if(xIsNext){
      copy[i]="X"
    }else{
      copy[i]="O"
    }
    setArr(copy)
    setXisNext(!xIsNext)
   
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <>
        <div className="grid-row">
          <Square value={temp[0]} fx={() => handleClick(0)}></Square>
          <Square value={temp[1]} fx={() => handleClick(1)}></Square>
          <Square value={temp[2]} fx={() => handleClick(2)}></Square>
        </div>
        <div className="grid-row">
          <Square value={temp[3]} fx={() => handleClick(3)}></Square>
          <Square value={temp[4]} fx={() => handleClick(4)}></Square>
          <Square value={temp[5]} fx={() => handleClick(5)}></Square>
        </div>
        <div className="grid-row">
          <Square value={temp[6]} fx={() => handleClick(6)}></Square>
          <Square value={temp[7]} fx={() => handleClick(7)}></Square>
          <Square value={temp[8]} fx={() => handleClick(8)}></Square>
        </div>
    </>
  )
}

export default App
