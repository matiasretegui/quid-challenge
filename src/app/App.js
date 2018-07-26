import React, { Component } from 'react';
import './App.css';
import Board from '../components/board/Board'
import Gallery from '../components/gallery/Gallery'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedBoard: {columns: 3, rows: 3, data: undefined},
      boards: [
        {columns: 2, rows: 2, data: undefined},
        {columns: 4, rows: 2, data: undefined},
        {columns: 3, rows: 3, data: undefined},
        {columns: 6, rows: 2, data: undefined}
      ],
      isSaving: false
    }
    this.selectBoard = this.selectBoard.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
  //This method save the selected board on localstorage and add it to gallery
  handleSave = (data, rows, columns) => {
    const state = this.state;
    const board = {data:data, rows:rows, columns:columns}
    //To save selected board to local storage.
    localStorage.setItem('board', JSON.stringify(board));



    //You can add current board to the list here (allways add one for now)
    const boards = this.state.boards;
    boards.push(board)
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
            <Board isSaving={isSaving} columns={board.columns} rows={board.rows} data={board.data} handleSave={this.handleSave}/>
            <Gallery handleClick={this.selectBoard} boards={this.state.boards} />
        </div>
      </div>
    );
  }
}

export default App;
