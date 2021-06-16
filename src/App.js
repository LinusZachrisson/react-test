import React from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";
import ShowText from "./components/showtext/showText";

class App extends React.Component {
  state = {
    inputText: "Skriv text här",
  };

  saveNewText = (getText) => {
    console.log("callback i app.js");
    this.setState({ inputText: getText });
  };

  render() {
    return (
      <>
        <Header />
        <Main inputText={this.state.inputText} getNewText={this.saveNewText} />
        <ShowText showText={this.state.inputText} />
      </>
    );
  }
}

export default App;
