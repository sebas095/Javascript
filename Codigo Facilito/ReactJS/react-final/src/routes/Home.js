import React from 'react';
import {Link} from 'react-router';

export default class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="home">
        <h1>React Facilito, Pasa y Firma :D!</h1>
        <Link to="sign">Firma ahora! :D</Link>
      </div>
    );
  }
}
