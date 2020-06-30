import React, { Component } from "react";

class Api extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const url = "https://hn.algolia.com/api/v1/search?query=React";

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result.hits,
        });
      });
  }

  render() {
    const { data } = this.state;

    const result = data.map((item, key) => (
      <tr>
        <td><a href={item.url}>{item.title}</a></td>
      </tr>
    ));

    return (
      <div className="container">
        <hr />
        <hr />
        <hr />
        <h1>Hacker News</h1>
        <table className="table">{result}</table>
      </div>
    );
  }
}

export default Api;
