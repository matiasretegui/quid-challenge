import React, { Component } from 'react'
import ColorPicker from '../colorPicker/ColorPicker'

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: props.data
    }
  }

  componentWillReceiveProps(newProps) {
    const {rows, columns, data} = newProps
    this.setInitialData(rows, columns, data)
  }

  componentWillMount() {
    if (this.state.board === undefined) {
      const {rows, columns, data} = this.props
      this.setInitialData(rows, columns, data)
    }
  }

  changeColor = (picker) => {
    let bgColor;
    if (picker.isDirty) {
      bgColor = 'rgb(255,255,255)';
    } else {
      let x = Math.floor(Math.random() * 256);
      let y = Math.floor(Math.random() * 256);
      let z = Math.floor(Math.random() * 256);
      bgColor = "rgb(" + x + "," + y + "," + z + ")";
    }

    let board = this.state.board;
    board[picker.row][picker.column].color = bgColor;
    board[picker.row][picker.column].isDirty = !picker.isDirty;
    this.setState({board: board});
  }

  setInitialData = (rows, columns, data) => {
    if (data !== undefined) {
      this.setState({board: data});
    } else {
      let newBoard = [];
      for (let i = 0; i < columns; i++) {
        if (newBoard[i] === undefined) {
          newBoard[i] = []
        }
        for (let j = 0; j < rows; j++) {
          if (newBoard[i, j] === undefined) {
            newBoard[i, j] = []
          }
          newBoard[i, j].push({color: 'rgb(255,255,255)', column: i, row: j, isDirty: false});
        }
      }
      this.setState({board: newBoard});
    }
  }


  render() {
    const { id, rows, columns, handleSave, isSaving } = this.props
    const board = this.state.board
    return (
      <div className='Board'>
        {board &&
        <div>
          <h2>{rows} X {columns}</h2>
          <p> Pick each panel to toggle his color</p>
          <div className='ColorPickers'>
            {board.map((row) => (<div>
                {row.map((picker) => (<ColorPicker color={picker.color} handleClick={() => this.changeColor(picker)}/>))}
              </div>
            ))}
          </div>
          <div>
            <button onClick={e => handleSave(board, rows, columns, id)}>Save</button>
            <button onClick={e => this.setInitialData(rows, columns)}>Reset</button>
          </div>

          {isSaving && <p className='savedMessage'>Saved</p>}
        </div>
        }
      </div>
    );
  }
}

export default Board