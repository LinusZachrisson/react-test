import React from "react";

class Main extends React.Component {
  state = {
    inputText: this.props.inputText,
  };

  onChange = (evt) => {
    console.log("Ändring");

    this.setState({ inputText: evt.target.value });
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    console.log("Form sparat");
    this.props.getNewText(this.state.inputText);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.onChange}
        />
        <button type="submit">Spara</button>
      </form>
    );
  }
}

export default Main;
