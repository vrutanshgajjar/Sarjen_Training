import React from "react";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/general/in.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          articles: data.articles,
          loading: false
        });
      });
  }

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Latest News</h2>

        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {this.state.articles.map((news, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                <b>{news.title}</b>
                <br />
                {news.description}
                <br />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default News;