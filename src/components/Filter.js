import React from 'react'

const Filter = (props) => {
    return (
        <div>
            filter with <input value={props.filterInputValue} onChange={props.filterInputChangeFn} />
        </div>
    )
}
export default Filter