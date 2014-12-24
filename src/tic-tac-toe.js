var clicks = 0;
var TicTacToeBoard = React.createClass({
  render: function(){
    return (
      <div className="ticTacToeBoard" >
        <TicTacToeSquare turn={this.props.turn}/>
        <TicTacToeSquare turn={this.props.turn}/>
        <TicTacToeSquare turn={this.props.turn}/>
      </div>
    );	  
  }
});

var TicTacToeSquare = React.createClass({
  getInitialState: function(){
    return { checked: false };		   
  },
  getTurn: function(){
    this.props.turn = this.props.turn == "x" ? "o" : "x"
  },
  handleClick: function(){
    if( !this.state.checked ){
      this.setState({ 
	checked: true,
	turn: this.getTurn()
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
