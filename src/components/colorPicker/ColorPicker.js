import React from 'react'

const ColorPicker = ({color, handleClick}) => (
  <button className="ColorPicker" onClick={handleClick}   style={{backgroundColor : color}}>
  </button>
)

export default ColorPicker