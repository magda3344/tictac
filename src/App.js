import React from 'react';
import logo from './logo.svg';
import './App.css';

class Square extends React.Component {//pole na planszy
  render() {
    return (
        <button className="square">
          {this.props.value}
        </button>
    );
  }
}
//{this.props.value} - wyswietla przekazaną wartość value z komponentu Board
//to przekazanie atrybutu z komponentu nadrzędnego Board do komponentu potomnego Square

class Board extends React.Component { //plansza
  renderSquare(i) {
    return <Square value={i} />; //komponentowi Square przekazuję atrybut o nazwie value
  }

  render() {
    const status = 'Next player: X';

    return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
    );
  }
}

class Game extends React.Component { //gra
  render() {
    return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
    );
  }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

