import React from 'react';
import PeoplePhoto from './PeoplePhoto';
import PeopleTitle from './PeopleTitle';

export default class PeopleFrame extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <PeoplePhoto />
        <PeopleTitle />
      </div>
    );
  }
}
