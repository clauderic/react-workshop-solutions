import React from "react";

export default class Timer extends React.Component {
  state = { lapse: 0 };

  componentDidMount() {
    console.log("componentDidMount");
    this.timer = setInterval(() => {
      this.setState({
        lapse: this.state.lapse + 1
      });
    }, 1000);
  }

  componentWillMount() {
    console.log("componentWillMount");
  }
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount");
  }

  render() {
    const { lapse } = this.state;
    return <div>{lapse}s</div>;
  }
}
