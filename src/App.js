import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {second: 0}
  }

  tick(){
    this.setState(state => ({
      second: state.second + 1
    }))
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }

  render(){
    return(
      <div>'текст которую просили', seconds: {this.state.second}</div>
    )
  }
}

export default App;