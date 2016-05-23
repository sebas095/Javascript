import React from "react";
import ReactDom from "react-dom";

class Layout extends React.Component {
  constructor() {
    super();
    this.name = "Sebastian Duque";
  }

  getName() {
    return "Codigo Facilito";
  }

  render() {
    return (
      <h1>Hola {this.getName()}</h1>
    );
  }
}

const app = document.getElementById('app');
ReactDom.render(<Layout/>, app);
