import { useState } from 'react'
import './App.css'
import { findEmpty, initSudoku, objToArray, solveSudoku } from './SudokuUtils'

import SudokuBoard from './components/SudokuBoard'


function App() {
  const [sudoku, setSudoku] = useState(initSudoku())

  function onChange(row, col, newVal) {
    const copy = { ...sudoku } // IMPORTANT! NEVER MUTATE STATE DIRECTLY. MAKE COPY IF NEED TO, THEN MUTATE COPY, AND SET STATE COPY
    copy.rows[row].cells[col].val = newVal
    setSudoku(copy)
  }

  function visualizeSudoku() {
    const sequence = solveSudoku(sudoku)
    console.log(sequence)
    animateSudoku(sequence)
  }

  async function animateSudoku(sequence) {
    for (const change of sequence) {
      const [r, c, v] = change

      const sleepTime = 100
      await sleep(sleepTime)
      
      const copy = {...sudoku}
      copy.rows[r].cells[c].val = v || ""
      setSudoku(copy)
    }
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sudoku Solver</h1>
      </header>
      <SudokuBoard sudoku={sudoku} onChange={onChange}/>
      <button className='btn' onClick={visualizeSudoku}>Solve</button>
    </div>
  );
}

export default App;
