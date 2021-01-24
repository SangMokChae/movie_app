import React from 'react';

class App extends React.Component{ // React.component로 부터 상속 받는다.
  // mount는 application을 실행하면 생거나는것
  state = {
    isLoading: true,
    movies: []
  }; 
  // Q1 render을 하면 호출되는 life cycle method는? = componentDidMount
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false});
    }, 6000); // timeout: JS
  }
  render(){
    const { isLoading } = this.state;
    return (
      <div>{isLoading ? "Loading..." : "We are ready"}</div>
    )
  };
}

export default App;
