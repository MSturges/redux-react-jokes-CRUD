import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJokes } from '../actions/index';
import { Link } from 'react-router';

class PostIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts(){
    return this.props.jokes.map((joke) => {
      return (
        <li className="list-group-item" key={joke.id}>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
      <h1>This is the jokes index file!!!</h1>
      <ul>
        {this.renderPosts()}
      </ul>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return { jokes: state.posts.all };
}

export default connect(mapStatetoProps, { fetchJokes })(JokeIndex);
