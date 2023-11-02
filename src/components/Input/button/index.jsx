import React from 'react'
import "./index.scss"

function Button({customText,customClass,customFunction}) {
  return (
    <button 
      className={"button" + " " + customClass }
      type="button"
      onClick = {(event) => {customFunction(customText)}}
    >
        {customText}
    </button>
  )
}

export default Button
