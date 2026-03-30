import React from "react";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: "",
      wind: "",
      loading: true
    };
  }

  componentDidMount() {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=23.03&longitude=72.58&current_weather=true"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          temp: data.current_weather.temperature,
          wind: data.current_weather.windspeed,
          loading: false
        });
      });
  }

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Amdavad Weather</h2>

        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h3>Temperature: {this.state.temp}°C</h3>
            <h3>Wind Speed: {this.state.wind} km/h</h3>
          </>
        )}
      </div>
    );
  }
}

export default Weather;