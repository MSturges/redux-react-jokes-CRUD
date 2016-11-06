import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchJoke, deleteJoke } from '../actions/index';
import { Link } from 'react-router';

class JokeShow extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchJoke(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deleteJoke(this.props.params.id)
    .then(()=> {
      this.context.router.push('/')
    });
  }

  render() {

    const { joke } = this.props;
    if(!joke) return (<div><h1 className="animated infinite bounce">Loading...</h1></div>);

    return (
      <div>
      <Link to="/">Back To Jokes</Link>
      <button
      onClick={this.onDeleteClick.bind(this)}
      className="btn btn-danger pull-xs-right">
      Delete Post
      </button>
      <h2>Title: {joke.title}</h2>
      <h3>genre: {joke.genre}</h3>
      <h3>Author: {joke.author}</h3>
      <p>Joke:{joke.joke}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { joke: state.jokes.joke }
}

export default connect(mapStateToProps, { fetchJoke, deleteJoke })(JokeShow);
