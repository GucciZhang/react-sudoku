function Cell({ cell, onChange }) {

    function handleChange(e) {
        const value = e.target.value
        const regex = /^[1-9]$/
        if (value === '' || regex.test(value)) {
            onChange(cell.row, cell.col, value)
        }
    }

    return (
        <input value={cell.val} className='cell' readOnly={cell.readOnly} onChange={handleChange}/>
    )
}

export default Cell