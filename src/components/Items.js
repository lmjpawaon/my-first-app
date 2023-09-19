import React from 'react'

const Items = (props) => {
  return (
    <>
        {props.items.map(item=>(
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
            </tr>
        ))}
    </>
  )
}

export default Items