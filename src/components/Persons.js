  
import React from 'react';
const Persons = (props) => {
    return (
    
        <div>
                    { props.name.map( person =>
                        <li key={ person.id }>
                            { person.name } { person.number } <button onClick={ ()=> { props.onDeleteClick( person.id )} }>Delete</button>
                        </li> 
                    ) }
                    </div>
             
    )
}

export default Persons