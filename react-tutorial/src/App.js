import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";
import Api from "./Api";

class App extends Component {
  state = {
    listeneintraege: [
      {
        name: "Uschi",
        aufgabe: "Grundstück bewachen",
      },
      {
        name: "Elmar",
        aufgabe: "Müll entworgen",
      },
      {
        name: "Astrid",
        aufgabe: "Buch lesen",
      },
      {
        name: "Nina",
        aufgabe: "Staubsaugen",
      },
    ],
  };

  handleSubmit = (listeneintrag) => {
    this.setState({
      listeneintraege: [...this.state.listeneintraege, listeneintrag],
    });
  };

  removeListeneintrag = (index) => {
    const { listeneintraege } = this.state;

    this.setState({
      listeneintraege: listeneintraege.filter((listeneintrag, i) => {
        return i !== index;
      }),
    });
  };

  render() {
    const { listeneintraege } = this.state;

    return (
      <div>
        <Table
          TodoDaten={listeneintraege}
          removeListeneintrag={this.removeListeneintrag}
        />
        <Form handleSubmit={this.handleSubmit} />
        <Api />
      </div>
    );
  }
}

export default App;
