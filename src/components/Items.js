import React from 'react'

const Items = (props) => {
  return (
    <>
        {props.items.map(item=>(
            <tr key={item.id} onClick={()=>alert(`Clicked: ${item.name} - ${item.price}`)}>
                <td>{item.name}</td>
                <td>{props.includePrice && `$${item.price}`}</td>
            </tr>
        ))}
    </>
  )
}

export default Items