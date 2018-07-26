import React, { Component } from 'react';
import './App.css';
import Board from '../components/board/Board'
import Gallery from '../components/gallery/Gallery'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedBoard: {id:3, columns: 3, rows: 3, data: undefined},
      boards: [
        {id:1, columns: 2, rows: 2, data: undefined},
        {id:2, columns: 4, rows: 2, data: undefined},
        {id:3, columns: 3, rows: 3, data: undefined},
        {id:4, columns: 3, rows: 3, data: undefined},
        {id:5, columns: 6, rows: 2, data: undefined}
      ],
      isSaving: false
    }
    this.selectBoard = this.selectBoard.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
  //This method save the selected board on localstorage and add it to gallery
  handleSave = (data, rows, columns, id) => {
    const state = this.state;
    const board = {data:data, rows:rows, columns:columns}
    //To save selected board to local storage.
    localStorage.setItem('board', JSON.stringify(board));

    const boards = this.state.boards;
    if (id < 6) {
      board.id = boards.length + 1;
      boards.push(board)
    } else {
      boards[id - 1] = board
    }

    this.setState({boards: boards, selectedBoard: board, isSaving: true})
    setTimeout(
      function() {
        this.setState({isSaving: false});
      }
      .bind(this),
      3000
    );

  }

  selectBoard = (board) => {
    this.setState({selectedBoard: board});
  }

  render() {
    const board = this.state.selectedBoard
    const isSaving = this.state.isSaving
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Quid Challenge</h1>
        </header>
        <div>
            <Board isSaving={isSaving} columns={board.columns} rows={board.rows} data={board.data} id={board.id} handleSave={this.handleSave}/>
            <Gallery handleClick={this.selectBoard} boards={this.state.boards} selected={board.id}/>
        </div>
      </div>
    );
  }
}

export default App;
