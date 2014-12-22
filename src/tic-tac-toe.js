var TicTacToeBoard = React.createClass({
  getInitialState: function(){
    return { clicks: 0 };		   
  },
  render: function(){
    var self = this;
    var setClick = function(){
      self.setState({clicks: this.state.clicks += 1 }) 
    };
    console.log( this.props );
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
    this.props.setClick();
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
