import React from 'react';

class Square extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count: 0
    };
    this.handleClick = this.handleClick.bind(this); //any function that isn't a built-in method needs something like this
  }
  componentDidMount(){
    this.interval = setInterval(()=>{ //arrow functions allow you to use 'this' inside themwhile still referencing the class
      this.setState((prevState, props) => ({//using this.setState causes it to rerender
        count: prevState.count + 1
      }));
    }, 1000);
  }
  componentWillUnmount(){
     clearInterval(this.interval);
  }
  handleClick(){
    this.setState({
      count:0
    });
  }
  render(){//can use logic in here still
    return <div className={this.props.classToUseForHeader} onClick={this.handleClick}>{this.state.count}</div>;
  }
}

export default Square