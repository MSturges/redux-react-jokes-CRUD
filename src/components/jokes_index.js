import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJokes } from '../actions/index';
import { Link } from 'react-router';
import MobileList from './jokes_index_components/jokes_mobile';
import WebList from './jokes_index_components/jokes_web';


class JokeIndex extends Component {

  constructor(props) {
    super(props);
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentWillMount() {
    this.props.fetchJokes()
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

  render() {
    if (this.props.jokes.jokes.length > 0) {
      if (this.state.width < 900) {
        return (
          <div>
          <div className="header">
          <h1>Comedy Cellar</h1>
          </div>
          <div className="button-container">
          <Link className="animated bounceInDown button" to="/joke/new"> Add Joke </Link>
          </div>
          <MobileList jokes={this.props.jokes.jokes}/>
          </div>
        );
      } else {
        return (
          <div className="wtf">
          <div className="header">
            <h1>Welcome to the</h1>
            <h1>Comedy Cellar</h1>
          </div>
          <div className="button-container">
          <Link className="animated bounceInLeft button" to="/joke/new"> Add Joke </Link>
          </div>
          <WebList jokes={this.props.jokes.jokes}/>
          </div>
        );
      }
    } else {
      return (
        <div>
        <Link className="animated bounceInDown button" to="/joke/new"> Add Joke </Link>

        <h1 className="animated infinite bounce">Loading...Would ya give it a Second?</h1>
        </div>
      );
    }
  }
}

function mapStatetoProps(state) {
  return { jokes: state.jokes };
}

export default connect(mapStatetoProps, { fetchJokes })(JokeIndex);
