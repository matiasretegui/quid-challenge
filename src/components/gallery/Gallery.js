import React from 'react';

const Gallery = ({boards, handleClick}) => (
  <div className="Gallery">
    <h3> Boards Gallery</h3>
    {boards.map((board) => (
      <div className='boardSettings' onClick={() => handleClick(board) }>
        <h3>{board.rows} X {board.columns}</h3>
      </div>
    ))}
  </div>
)

export default Gallery