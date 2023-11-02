import React from 'react'
import "./index.scss"

function TextInput({customText,customClass,setText}) {

  const handleChange = (e) => {

  }

  return (
    <textarea 
        className={"text-input" + " " + customClass} 
        type='text' 
        placeholder={customText}
        onChange={(event) => {setText(event.target.value)}}
    />
  )
}

export default TextInput
