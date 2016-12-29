import React from 'react';

export default class CommentList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form class="commentForm" onSubmit={this.props.onSubmit}>
        <input type="text" name="author" placeholder="Su nombre"/>
        <input type="text" name="text" placeholder="Firma! :D"/>
        <input type="hidden" name="id" value={Date.now()}/>
        <input type="submit" value="Enviar! :D"/>
      </form>
    );
  }
}
