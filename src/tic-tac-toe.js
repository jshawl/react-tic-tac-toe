Array.prototype.containsArray = function ( array /*, index, last*/ ) { //http://jsfiddle.net/ThinkingStiff/X9jed/
    if( arguments[1] ) {
        var index = arguments[1], last = arguments[2];
    } else {
        var index = 0, last = 0; this.sort(); array.sort();
    };
    
    return index == array.length
        || ( last = this.indexOf( array[index], last ) ) > -1
        && this.containsArray(array, ++index, ++last );
};

var TicTacToeBoard = React.createClass({
  getInitialState: function(){
    return { turn: 'x', winnables:[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]};		   
  },
  checkBoard: function(){
      xs = [];
      os = [];
      for( ref in this.refs ){
	square = this.refs[ref.toString()].state.turn;
	if (square == "x"){
	  xs.push( parseInt(ref) );
	} else if ( square == "o" ){
	  os.push( parseInt(ref) );
	}
      }
      for( var i = 0; i < this.state.winnables.length; i++ ){
        winnable = this.state.winnables[i];
        if( xs.containsArray(winnable) ){
          alert("xs win");
	}
        if( os.containsArray(winnable) ){
          alert("os win");
	}
      }
  },
  changeTurn: function(){
    this.setState({
      turn: this.state.turn == "x" ? "o" : "x"
    }, this.checkBoard );
  },
  render: function(){
    return (
      <div className="ticTacToeBoard" key="0">
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
