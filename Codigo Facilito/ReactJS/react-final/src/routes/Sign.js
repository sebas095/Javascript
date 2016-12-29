import React from 'react';
import Reflux from 'reflux';
import $ from 'jquery';
import ReactMixin from 'react-mixin';

import CommentBox from '../components/CommentBox';
import CommentActions from '../actions/CommentActions';
import CommentStore from '../stores/CommentStore';

@ReactMixin.decorate(Reflux.connect(CommentStore, 'comments'))
export default class Sign extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    CommentActions.fetchComments();
  }

  onSubmitSendComment(ev) {
    ev.preventDefault();
    let data = $(ev.target).serializeArray();
    let comment = {
      author: data[0].value,
      text: data[1].value,
      id: data[2].value
    };
    
    CommentActions.sendSign(comment);
  }

  render() {
    if (!this.state.comments) {
      return (
        <h1>Loading...</h1>
      );
    } else {
      return (
        <div class="sign">
          <CommentBox data={this.state.comments} onSubmit={this.onSubmitSendComment.bind(this)}/>
        </div>
      );
    }
  }
}
