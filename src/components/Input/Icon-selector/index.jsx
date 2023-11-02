import React from 'react'
import Button from '../button/index.jsx'
import "./index.scss"

function IconSelector({setIcon}) {
const presetIcons = {
    rocket: "🚀",
    explore: "🔍",
    grow: "📈",
    docs: "📝",
    objective: "🎯"
}


  return (
    <div>
      <div className='preset-icons'>
        <Button customFunction = {setIcon} customText={presetIcons.rocket} customClass={"icon"}/>
        <Button customFunction = {setIcon} customText={presetIcons.explore} customClass={"icon"}/>
        <Button customFunction = {setIcon} customText={presetIcons.grow} customClass={"icon"}/>
        <Button customFunction = {setIcon} customText={presetIcons.docs} customClass={"icon"}/>
        <Button customFunction = {setIcon} customText={presetIcons.objective} customClass={"icon"}/>
      </div>
    </div>
  )
}

export default IconSelector
