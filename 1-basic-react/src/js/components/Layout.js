import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>It really works well! Nice job Tom!</h1>
        <Footer />
      </div>
    );
  }
}