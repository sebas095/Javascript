import React from 'react';
import {Link} from 'react-router';

const logo_cf = require('../images/cf.png');

export default class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="home">
        <img class="center-block" src={logo_cf} alt="Logo"/>
        <h1 class="text-center">React Facilito, Pasa y Firma :D!</h1>
        <button class="btn btn-default btn-lg center-block">
          <Link to="sign">Firma ahora! :D</Link>
        </button>
      </div>
    );
  }
}
