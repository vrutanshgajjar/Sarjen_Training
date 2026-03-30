import React from "react";

class Movie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {movie: "",data: null, error: ""}
  }

  handleChange = (e) => {
    this.setState({ movie: e.target.value });
  };

  fetchMovie = () => {
    const { movie } = this.state;

    if (!movie.trim()) {
      this.setState({ error: "Please enter a movie name" });
      return;
    }

    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(movie)}&apikey=thewdb`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "False") {
          this.setState({ error: data.Error, data: null });
        } else {
          this.setState({ data, error: "" });
        }
      })
      .catch((err) => {
        this.setState({ error: "Something went wrong", data: null });
        console.error(err);
      });
  };

  render() {
    const { movie, data, error } = this.state;

    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>OMDb Movie Search</h2>

        <input type="text" value={movie} onChange={this.handleChange} placeholder="Enter movie title"/>

        <button onClick={this.fetchMovie} disabled={!movie.trim()}>Search</button>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {data && (
          <div style={{ marginTop: "20px" }}>
            <h3>{data.Title} ({data.Year})</h3>
            <img src={data.Poster !== "N/A" ? data.Poster : ""} alt={data.Title} style={{ width: "200px" }}/>
            <p><strong>Genre:</strong> {data.Genre}</p>
            <p><strong>Plot:</strong> {data.Plot}</p>
            <p><strong>Rating:</strong> {data.imdbRating}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Movie;