import Cell from './Cell'

function SudokuBoard({ sudoku, onChange }) {
    return (
        <div className='sudoku-board'>
            {sudoku.rows.map( (row, index) => {
                return <div key={index}>
                    {row.cells.map( (cell, index) => {
                        return <Cell cell={cell} onChange={onChange} key={index} />
                    })}    
                </div>
            })}
        </div>
    )
}

export default SudokuBoard