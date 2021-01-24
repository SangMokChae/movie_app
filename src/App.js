import React from 'react';

class App extends React.Component{ // React.component로 부터 상속 받는다.
  constructor(props) {
    super(props);
    console.log("Hello");
  }
  state = {
    count: 0
  };
    add = () => {
      this.setState(current => ({ count: current.count + 1 }));
    };
    minus = () => {
      this.setState(current => ({ count: current.count - 1 }));
    };
    componentDidMount() {
      console.log("component rendered");
    }
    // 매순간 setState를 호출할때마다 state와 render function을 호출할 것이다.
    componentDidUpdate(){
      console.log("I just updated");
    }
    componentWillUnmount() { // component가 떠날 때 호출이 된다.
      console.log("Goodbye, Cruel world");
    }
    render(){
      console.log("I'm rendering");
    // state는 Object이고 component의 data 넣을 공간이 존재하고 이 data는 변한다.
    return (
      <div>
        <h1>The Number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  };
}
// react는 자동적으로 나의 class component의 render method를 실행한다.

export default App;
