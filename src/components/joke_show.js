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
      <ul>
      <li className="joke-single animated bounceInLeft row" key={joke.id}>

      <div className="col-lg-2 col-md-2 col-lg-2 joke-details ">

        <h3>{joke.title}</h3>

        <ul className="fa-ul">
          <li><i className="fa-li fa fa-user-circle fa-3x " aria-hidden="true"></i>{joke.author}</li>
          <li><i className="fa-li fa fa fa-tags fa-3x " aria-hidden="true"></i>{joke.genre}</li>
        </ul>

        <div className="edit-btn-container">
          <Link className="edit-btn" to={"/joke/edit/" + joke.id}>Edit</Link>
        </div>

        <div className="delete-btn-container">
          <button onClick={this.onDeleteClick.bind(this)} className="delete-btn">Delete</button>
        </div>
      </div>

      <p className="col-lg-10 col-md-10 col-sm-10 col-xs-10 joke-list-joke">{joke.joke}</p>

      </li>
      </ul>
    );
    // return (
    //   <div className="joke-show animated bounceInLeft row" key={joke.id}>
    //   <div className="col-md-2 col-lg-2 joke-show-item-container ">
    //
    //   <h3 className="firstH3"><span className="">Title</span></h3>
    //   <h4 className="joke-show-item">{joke.title}</h4>
    //
    //   <h3><span className="">Genre</span></h3>
    //   <h4 className="joke-show-item">{joke.genre}</h4>
    //
    //   <h3><span className="">Author</span></h3>
    //   <h4 className="joke-show-item">{joke.author}</h4>
    //
    //   </div>
    //   <p className="col-md-8 col-sm-8 col-xs-8 joke-show-joke">{joke.joke}</p>
    //   <div className="col-md-2 joke-show-edit">
    //   <Link to="/">Back To Jokes</Link>
    //   <Link to={"/joke/edit/" + joke.id}>Edit</Link>
    //
    //   <button
    //   onClick={this.onDeleteClick.bind(this)}
    //   className="btn btn-danger pull-xs-right">
    //   Delete Post
    //   </button>
    //   </div>
    //   </div>
    // );
  }
}

function mapStateToProps(state) {
  return { joke: state.jokes.joke }
}

export default connect(mapStateToProps, { fetchJoke, deleteJoke })(JokeShow);
