import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {currentTime: new Date()}
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        currentTime: new Date()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { currentTime } = this.state;

    const time = currentTime.toLocaleTimeString();
    const date = currentTime.toLocaleDateString();

    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Digital Clock</h2>
        <h1>{time}</h1>
        <h3>{date}</h3>
      </div>
    );
  }
}

export default Clock;