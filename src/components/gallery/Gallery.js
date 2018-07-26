import React from 'react';

const Gallery = ({boards, handleClick, selected}) => (
  <div className="Gallery">
    <h3> Boards Gallery</h3>
    <p>You can't update default boards. If you try to save them you will create a copy.</p>
    {boards.map((board, index) => (
      <div className={ 'boardSettings ' + (selected === board.id ? 'selected':'')} onClick={() => handleClick(board)} key={index}>
        <h3>{board.rows} X {board.columns}</h3>
      </div>
    ))}
  </div>
)

export default Gallery