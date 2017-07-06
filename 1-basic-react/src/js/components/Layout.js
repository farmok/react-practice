import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
      goodbye: "Goodbye",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    // setTimeout(() => {
    //   this.setState({title: "Welcome Farid!"});
    //   this.setState({goodbye: "Goodbye Farid"});
    // }, 2000);


    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer goodbye={this.state.goodbye} />
      </div>
    );
  }
}