import React from 'react'

const TextInput = ({value, onChange}) => {
  return (
    <div>
        <input type='text' style={{width:"100%"}} onChange={onChange}/>
    </div>
    
  )
}

export default TextInput