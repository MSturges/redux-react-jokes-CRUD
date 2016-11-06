import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJokes } from '../actions/index';
import { Link } from 'react-router';

class JokeIndex extends Component {

  componentWillMount() {
    this.props.fetchJokes()
  }

  renderPosts(){
    if (this.props.jokes.jokes.length > 0) {
      return this.props.jokes.jokes.map((joke) => {
        return (
          <li className="joke-list animated bounceInLeft" key={joke.id}>
          <div className="joke-list-item-container">
            <p className="joke-list-item">Title: {joke.title}</p>
            <p className="joke-list-item">genre: {joke.genre}</p>
            <p className="joke-list-item">Author: {joke.author}</p>
          </div>
          <p className="joke-list-joke">Joke:{joke.joke}</p>
          <div className="joke-list-edit">
          <Link to={"joke/" + joke.id}>Edit/Delete</Link>
          </div>
          </li>
        );
      });
    } else {
      return (
        <div>
        <h1 className="animated infinite bounce">Loading...</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
      <div className="header">
        <h1>Browse & Share your favorite Jokes!</h1>
      </div>
      <div className="button">
        <Link to="/joke/new"> Add Joke </Link>
      </div>
      <ul>
      {this.renderPosts()}
      </ul>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return { jokes: state.jokes };
}

export default connect(mapStatetoProps, { fetchJokes })(JokeIndex);
