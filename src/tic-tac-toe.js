var TicTacToeBoard = React.createClass({
  render: function(){
    this.props.clicks = 1;
    return (
      <div className="ticTacToeBoard">
        <TicTacToeSquare />
        <TicTacToeSquare />
        <TicTacToeSquare />

        <TicTacToeSquare />
        <TicTacToeSquare />
        <TicTacToeSquare />

        <TicTacToeSquare />
        <TicTacToeSquare />
        <TicTacToeSquare />
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
	checked: true
      });
    }
    this.props.clicks += 1;
    console.log( this.props );
  },
  render: function(){
    var icon = this.state.checked ? "x" : "";
    return(
      <div className="ticTacToeSquare" onClick={this.handleClick}> 
	{icon}
      </div>
    );	  
  }
});

React.render(
  <TicTacToeBoard />,
  document.querySelector('.board')
);
