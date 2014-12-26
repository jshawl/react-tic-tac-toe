var TicTacToeBoard = React.createClass({
  getInitialState: function(){
    return { turn: 'x' };		   
  },
  changeTurn: function(){
    this.setState({
      turn: this.state.turn == "x" ? "o" : "x"
    }, function(){
      for( ref in this.refs ){
	console.log( this.refs[ref.toString()].state.turn);
      }
    });
  },
  render: function(){
    return (
      <div className="ticTacToeBoard" >
        <TicTacToeSquare ref="0" turn={this.state.turn} changeTurn={this.changeTurn}/>
        <TicTacToeSquare ref="1" turn={this.state.turn} changeTurn={this.changeTurn}/>
        <TicTacToeSquare ref="2" turn={this.state.turn} changeTurn={this.changeTurn}/>

        <TicTacToeSquare ref="3" turn={this.state.turn} changeTurn={this.changeTurn}/>
        <TicTacToeSquare ref="4" turn={this.state.turn} changeTurn={this.changeTurn}/>
        <TicTacToeSquare ref="5" turn={this.state.turn} changeTurn={this.changeTurn}/>

        <TicTacToeSquare ref="6" turn={this.state.turn} changeTurn={this.changeTurn}/>
        <TicTacToeSquare ref="7" turn={this.state.turn} changeTurn={this.changeTurn}/>
        <TicTacToeSquare ref="8" turn={this.state.turn} changeTurn={this.changeTurn}/>
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
      this.setState({ 
	checked: true,
	turn: this.props.turn
      });
      this.props.changeTurn(this.props.key, this.props.turn);
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
