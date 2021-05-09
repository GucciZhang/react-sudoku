const testSolve = [
    [ 5, 3, 4,  6, 7, 8,  9, 1, 2 ],
    [ 6, 7, 2,  1, 9, 5,  3, 4, 8 ],
    [ 1, 9, 8,  3, 4, 2,  5, 6, 7 ],
  
    [ 8, 5, 9,  7, 6, 1,  4, 2, 3 ],
    [ 4, 2, 6,  8, 5, 3,  7, 9, 1 ],
    [ 7, 1, 3,  9, 2, 4,  8, 5, 6 ],
  
    [ 9, 6, 1,  5, 3, 7,  2, 8, 4 ],
    [ 2, 8, 7,  4, 1, 9,  6, 0, 5 ],
    [ 3, 4, 5,  2, 8, 6,  1, 7, 9 ],
  ]

  const testSolveEasy = [
    [ 3, 0, 5,  4, 0, 2,  0, 6, 0 ],
    [ 4, 9, 0,  7, 6, 0,  1, 0, 8 ],
    [ 6, 0, 0,  1, 0, 3,  2, 4, 5 ],
  
    [ 0, 0, 3,  9, 0, 0,  5, 8, 0 ],
    [ 9, 6, 0,  0, 5, 8,  7, 0, 3 ],
    [ 0, 8, 1,  3, 0, 4,  0, 9, 2 ],
  
    [ 0, 5, 0,  6, 0, 1,  4, 0, 0 ],
    [ 2, 0, 0,  5, 4, 9,  0, 7, 0 ],
    [ 1, 4, 9,  0, 0, 7,  3, 0, 6 ],
  ]
// Soln
//   [ 3, 1, 5,  4, 8, 2,  9, 6, 7 ],
//   [ 4, 9, 2,  7, 6, 5,  1, 3, 8 ],
//   [ 6, 7, 8,  1, 9, 3,  2, 4, 5 ],

//   [ 7, 2, 3,  9, 1, 6,  5, 8, 4 ],
//   [ 9, 6, 4,  2, 5, 8,  7, 1, 3 ],
//   [ 5, 8, 1,  3, 7, 4,  6, 9, 2 ],

//   [ 8, 5, 7,  6, 3, 1,  4, 2, 9 ],
//   [ 2, 3, 6,  5, 4, 9,  8, 7, 1 ],
//   [ 1, 4, 9,  8, 2, 7,  3, 5, 6 ],

const testSolveMedium = [
    [ 0, 4, 3,  0, 0, 7,  8, 0, 0 ],
    [ 1, 0, 0,  0, 0, 0,  0, 0, 4 ],
    [ 0, 6, 8,  0, 0, 0,  0, 0, 0 ],
  
    [ 0, 0, 0,  0, 3, 1,  0, 8, 6 ],
    [ 0, 0, 9,  2, 0, 5,  1, 0, 0 ],
    [ 4, 8, 0,  7, 9, 0,  0, 0, 0 ],
  
    [ 0, 0, 0,  0, 0, 0,  6, 5, 0 ],
    [ 2, 0, 0,  0, 0, 0,  0, 0, 8 ],
    [ 0, 0, 5,  8, 0, 0,  2, 1, 0 ],
  ]
// Soln
// [ 9, 4, 3,  1, 2, 7,  8, 6, 5 ],
// [ 1, 2, 7,  6, 5, 8,  3, 9, 4 ],
// [ 5, 6, 8,  3, 4, 9,  7, 2, 1 ],

// [ 7, 5, 2,  4, 3, 1,  9, 8, 6 ],
// [ 6, 3, 9,  2, 8, 5,  1, 4, 7 ],
// [ 4, 8, 1,  7, 9, 6,  5, 3, 2 ],

// [ 8, 1, 4,  9, 7, 2,  6, 5, 3 ],
// [ 2, 9, 6,  5, 1, 3,  4, 7, 8 ],
// [ 3, 7, 5,  8, 6, 4,  2, 1, 9 ],

const testSolveExpert = [
    [ 0, 0, 0,  8, 0, 1,  0, 0, 0 ],
    [ 0, 0, 0,  0, 0, 0,  0, 4, 3 ],
    [ 5, 0, 0,  0, 0, 0,  0, 0, 0 ],
  
    [ 0, 0, 0,  0, 7, 0,  8, 0, 0 ],
    [ 0, 0, 0,  0, 0, 0,  1, 0, 0 ],
    [ 0, 2, 0,  0, 3, 0,  0, 0, 0 ],
  
    [ 6, 0, 0,  0, 0, 0,  0, 7, 5 ],
    [ 0, 0, 3,  4, 0, 0,  0, 0, 0 ],
    [ 0, 0, 0,  2, 0, 0,  6, 0, 0 ],
  ]
// Soln
// [ 2, 3, 7,  8, 4, 1,  5, 6, 9 ],
// [ 1, 8, 6,  7, 9, 5,  2, 4, 3 ],
// [ 5, 9, 4,  3, 2, 6,  7, 1, 8 ],

// [ 3, 1, 5,  6, 7, 4,  8, 9, 2 ],
// [ 4, 6, 9,  5, 8, 2,  1, 3, 7 ],
// [ 7, 2, 8,  1, 3, 9,  4, 5, 6 ],

// [ 6, 4, 2,  9, 1, 8,  3, 7, 5 ],
// [ 8, 5, 3,  4, 6, 7,  9, 2, 1 ],
// [ 9, 7, 1,  2, 5, 3,  6, 8, 4 ],


  const testFilled = [
    [ 5, 3, 4,  6, 7, 8,  9, 1, 2 ],
    [ 6, 7, 2,  1, 9, 5,  3, 4, 8 ],
    [ 1, 9, 8,  3, 4, 2,  5, 6, 7 ],
  
    [ 8, 5, 9,  7, 6, 1,  4, 2, 3 ],
    [ 4, 2, 6,  8, 5, 3,  7, 9, 1 ],
    [ 7, 1, 3,  9, 2, 4,  8, 5, 6 ],
  
    [ 9, 6, 1,  5, 3, 7,  2, 8, 4 ],
    [ 2, 8, 7,  4, 1, 9,  6, 3, 5 ],
    [ 3, 4, 5,  2, 8, 6,  1, 7, 9 ],
  ]

  const testBad = [
    [ 1, 3, 4,  6, 7, 8,  9, 1, 2 ],
    [ 6, 7, 2,  1, 9, 5,  3, 4, 8 ],
    [ 1, 9, 8,  3, 4, 2,  5, 6, 7 ],
  
    [ 8, 5, 9,  7, 6, 1,  4, 2, 3 ],
    [ 4, 2, 6,  8, 5, 3,  7, 9, 1 ],
    [ 7, 1, 3,  9, 2, 4,  8, 5, 6 ],
  
    [ 9, 6, 1,  5, 3, 7,  2, 8, 4 ],
    [ 2, 8, 7,  4, 1, 9,  6, 3, 5 ],
    [ 3, 4, 5,  2, 8, 6,  1, 7, 9 ],
  ]

// { rows: [ { cells: [ { row: 0, col: 0, val: 9 }, ... ] }, ... ] }
export function initSudoku() {
    const result = { rows: [] }

    for (let i = 0; i < 9; ++i) {
        const row = { cells: [] }
        for (let j = 0; j < 9; ++j) {
        row.cells.push( { 
            row: i,
            col: j,
            val: testSolveEasy[i][j] || "",
            readOnly: testSolveEasy[i][j] ? true : false
        } )
        }
        result.rows.push(row)
    }

    return result
}

export function solveSudoku(sudokuObj) {
    const sudokuArray = objToArray(sudokuObj)
    const emptyCells = findEmpty(sudokuArray)
    if (emptyCells.length == 0) {
      alert("Sudoku already filled")
      return null
    }

    const sequence = []

    function solve(sudokuArray, emptyCells) {
        const r = emptyCells[0][0]
        const c = emptyCells[0][1]
        //prettyPrintArray(sudokuArray)
        //await sleep(100)

        for (let i = 1; i <= 9; ++i) {
            sudokuArray[r][c] = i

            if (checkRow(sudokuArray, r) && checkCol(sudokuArray, c) && checkBlock(sudokuArray, r, c)) {
                sequence.push([r, c, i])
                
                if (emptyCells.length === 1) {
                    console.log("Solution!")
                    return sudokuArray
                }
                const copy = [...emptyCells]
                copy.shift()
                
                

                const res = solve(sudokuArray, copy)
                if (res !== false) return res
            }
        }
        sudokuArray[r][c] = 0

        sequence.push([r, c, 0])
        
        //console.log("Fail")
        return false
    }

    solve(sudokuArray, emptyCells)

    return sequence
}

export function checkRow(sudoku, rowNum) {
    const row = sudoku[rowNum].filter( (val) => {
        return (val !== 0)
    })
    return (new Set(row)).size === row.length
}

export function checkCol(sudoku, colNum) {
    const col = sudoku.map( (row) => {
        return row[colNum]
    }).filter( (val) => {
        return (val !== 0)
    })
    return (new Set(col)).size === col.length
}

export function checkBlock(sudoku, rowNum, colNum) {
    const startRow = Math.floor(rowNum / 3) * 3
    const startCol = Math.floor(colNum / 3) * 3
    
    let block = []
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            block.push(sudoku[startRow+i][startCol+j])
        }
    }
    block = block.filter( (val) => {
        return (val !== 0)
    })
    return (new Set(block)).size === block.length
}

export function objToArray(sudokuObj) {
    const sudokuArray = sudokuObj.rows.map( (row) => {
        return row.cells.map( (cell) => {
            return cell.val === "" ? 0 : cell.val
        })
    })
    return sudokuArray
}

function arrayToObj(sudokuArray) {
    const sudokuObj = { rows: [] }

    for (let i = 0; i < 9; ++i) {
        const row = { cells: [] }
        for (let j = 0; j < 9; ++j) {
            row.cells.push( { 
                row: i,
                col: j,
                val: sudokuArray[i][j] || ""
            } )
        }
        sudokuObj.rows.push(row)
    }

    return sudokuObj
}

export function updateObj(sudokuObj, sudokuArray) {
    const copy = {...sudokuObj}

    for (let i = 0; i < 9; ++i) {
        for (let j = 0; j < 9; ++j) {
            copy.rows[i].cells[j].val = sudokuArray[i][j] || ""
        }
    }

    return copy
}

export function findEmpty(sudokuArray) {
    const emptyCells = []
    for (let i = 0; i < 9; ++i) {
        for (let j = 0; j < 9; ++j) {
            if (sudokuArray[i][j] === 0)
                emptyCells.push([i, j])
        }
    }
    return emptyCells
}

function prettyPrint({ rows }) {
    rows.forEach( (row) => {
        console.log(row.cells.map( (cell) => {
        return cell.val
        }).join(' '))
    })
}

export function prettyPrintArray(sudoku) {
    sudoku.forEach( (row) => {
        console.log(row.join(' '))
    })
    console.log("")
}