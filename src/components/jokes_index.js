import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJokes } from '../actions/index';
import { Link } from 'react-router';

class JokeIndex extends Component {

  componentWillMount() {
    this.props.fetchJokes()
  }

  // renderPosts(){
  //   console.log('renderPosts:', this.props.jokes);
  //   if (!this.props.jokes.length) {
  //     return this.props.jokes.map((joke) => {
  //       return (
  //         <li className="list-group-item" key={joke.id}>
  //         </li>
  //       );
  //     });
  //   } else {
  //     return (
  //       <div>
  //       <h1 className="animated infinite bounce">Loading...</h1>
  //         <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
  //       </div>
  //     );
  //   }
  // }

  renderPosts(){
    return this.props.jokes.map((joke) => {
      return (
        <li className="list-group-item" key={joke.id}>
        <Link to={"joke/" + joke.id}>
        <strong>{joke.title}</strong>
        </Link>
        </li>
      );
    });
  }


  render() {
    return (
      <div>
      <Link to="/joke/new" className="btn btn-primary">
      Add Joke
      </Link>
      <h1>This is the jokes index file!!!</h1>
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
