import React from "react";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0,intervalId: null};
  }

start = () => {
    if (this.state.intervalId) return;

    const intervalId = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.count >= 10) {
          clearInterval(this.state.intervalId);
          return { intervalId: null };
        }
        return { count: prevState.count + 1 };
      });
    }, 1000);

    this.setState({ intervalId });
  };

  pause = () => {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
      this.setState({ intervalId: null });
    }
  };

  stop = () => {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
    }
    this.setState({ count: 0, intervalId: null });
  };

  componentWillUnmount() {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
    }
  }

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button onClick={this.start}>Start</button>
        <button onClick={this.pause}>Pause</button>
        <button onClick={this.stop}>Stop</button>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}

export default Countdown;