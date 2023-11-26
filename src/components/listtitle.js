import React from 'react'

import trashCan from '../CSS/trash-can.png'

function ListTitle({ listName, setListNames}){


     const deleteList=()=> {
       setListNames(prevListNames => prevListNames.filter(name=> name !==listName));
    }


return (
    <div className='list-name'>
        <h3>{listName}</h3>
        <img    
            alt='delete'
            onClick={deleteList}
            src={trashCan}
            />

    </div>

)
}

export default ListTitle;