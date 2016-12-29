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
        <PeoplePhoto photo={this.props.people.picture.large}/>
        <PeopleTitle name={this.props.people.name}/>
      </div>
    );
  }
}
