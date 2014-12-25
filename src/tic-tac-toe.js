var TicTacToeBoard = React.createClass({
  getInitialState: function(){
    return { turn: 'x' };		   
  },
  changeTurn: function(){
    this.setState({
      turn: this.state.turn == "x" ? "o" : "x"
    });
  },
  render: function(){
    return (
      <div className="ticTacToeBoard" >
        <TicTacToeSquare turn={this.state.turn} changeTurn={this.changeTurn}/>
        <TicTacToeSquare turn={this.state.turn} changeTurn={this.changeTurn}/>
        <TicTacToeSquare turn={this.state.turn} changeTurn={this.changeTurn}/>
        <TicTacToeSquare turn={this.state.turn} changeTurn={this.changeTurn}/>
        <TicTacToeSquare turn={this.state.turn} changeTurn={this.changeTurn}/>
        <TicTacToeSquare turn={this.state.turn} changeTurn={this.changeTurn}/>
        <TicTacToeSquare turn={this.state.turn} changeTurn={this.changeTurn}/>
        <TicTacToeSquare turn={this.state.turn} changeTurn={this.changeTurn}/>
        <TicTacToeSquare turn={this.state.turn} changeTurn={this.changeTurn}/>
      </div>
    );	  
  }
});

var TicTacToeSquare = React.createClass({
  getInitialState: function(){
    return { checked: false };		   
  },
  handleClick: function(){
    if( !this.state.checked ){
      this.props.changeTurn(this.props.key, this.props.turn);
      this.setState({ 
	checked: true,
	turn: this.props.turn
      });
    }
  },
  render: function(){
    return(
      <div className="ticTacToeSquare" onClick={this.handleClick}> 
	{this.state.turn}
      </div>
    );	  
  }
});

React.render(
  <TicTacToeBoard turn="x" />,
  document.querySelector('.board')
);
