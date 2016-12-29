import React from 'react';
import ReactMixin from 'react-mixin';
import Reflux from 'reflux';

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

  render() {
    return (
      <div class="sign">
        <CommentBox />
      </div>
    );
  }
}
