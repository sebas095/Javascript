import React from 'react';

export default class CommentList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form class="commentForm" onSubmit={this.props.onSubmit}>
        <input type="text" class="form-control" name="author" placeholder="Su nombre"/><br/>
        <input type="text" class="form-control" name="text" placeholder="Firma! :D"/><br/>
        <input type="hidden" name="id" value={Date.now()}/>
        <input type="submit" class="center-block btn btn-default" value="Enviar! :D"/><br/>
      </form>
    );
  }
}
