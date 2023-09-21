import React from 'react'

const TextInput = () => {
  return (
    <div>
        <input type='text' style={{width:"100%"}} onChange={(evt)=>console.log(evt.target.value)}/>
    </div>
    
  )
}

export default TextInput