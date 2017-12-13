import React from "react";

export default class Timer extends React.Component {
  state = {
    lapse: 0,
  };

  componentDidMount() {
    console.info("componentDidMount");
    this.timer = setInterval(() => {
      this.setState({
        lapse: this.state.lapse + 1
      });
    }, 1000);
  }

  componentWillMount() {
    console.info("componentWillMount");
  }

  componentWillUpdate() {
    console.info("componentWillUpdate");
  }

  componentDidUpdate() {
    console.info("componentDidUpdate");
  }

  componentWillReceiveProps() {
    console.info("componentWillReceiveProps");
  }

  shouldComponentUpdate() {
    console.info("shouldComponentUpdate");
    return true;
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.info("componentWillUnmount");
  }

  render() {
    const { lapse } = this.state;

    return <code>{lapse}s</code>;
  }
}
