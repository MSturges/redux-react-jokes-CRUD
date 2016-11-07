import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchJoke, deleteJoke } from '../actions/index';
import { Link } from 'react-router';

class JokeShow extends Component {

  constructor(props) {
    super(props);
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentWillMount() {
    this.props.fetchJoke(this.props.params.id);
    window.addEventListener("resize", this.updateDimensions);
    this.updateDimensions();
  }
  updateDimensions() {
    var w = window,
    d = document,
    documentElement = d.documentElement,
    body = d.getElementsByTagName('body')[0],
    width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
    height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

    this.setState({width, height});
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  static contextTypes = {
    router: PropTypes.object
  };

  onDeleteClick() {
    this.props.deleteJoke(this.props.params.id)
    .then(()=> {
      this.context.router.push('/')
    });
  }


  render() {

    const { joke } = this.props;
    if(!joke) return (<div><h1 className="animated infinite bounce">Loading...</h1></div>);

    if (this.state.width < 900) {
      return (
        <div>
        <ul>
        <li className="joke-single animated bounceInLeft row" key={joke.id}>

        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 joke-details ">

        <h3>{joke.title}</h3>

        <ul className="fa-ul">
        <li><i className="fa-li fa fa-user-circle fa-3x " aria-hidden="true"></i>{joke.author}</li>
        <li><i className="fa-li fa fa fa-tags fa-3x " aria-hidden="true"></i>{joke.genre}</li>
        </ul>



        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 btn-show-container">

        <div className="back-btn-container">
          <Link className="back-btn" to="/">Back</Link>
        </div>

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
        </div>
      )
    }

    return (
      <div>
      <ul>
      <li className="joke-single animated bounceInLeft row" key={joke.id}>

      <div className="col-lg-2 col-md-2 col-sm-2 joke-details ">

      <h3>{joke.title}</h3>

      <ul className="fa-ul">
      <li><i className="fa-li fa fa-user-circle fa-3x " aria-hidden="true"></i>{joke.author}</li>
      <li><i className="fa-li fa fa fa-tags fa-3x " aria-hidden="true"></i>{joke.genre}</li>
      </ul>

      <div className="back-btn-container">
      <Link className="back-btn" to="/">Back</Link>
      </div>

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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { joke: state.jokes.joke }
}

export default connect(mapStateToProps, { fetchJoke, deleteJoke })(JokeShow);
