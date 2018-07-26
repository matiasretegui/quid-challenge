import React from 'react'

const ColorPicker = ({color, handleClick, key}) => (
  <button className="ColorPicker" onClick={handleClick} key={key} style={{backgroundColor : color}}>
  </button>
)

export default ColorPicker