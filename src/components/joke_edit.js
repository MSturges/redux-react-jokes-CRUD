import React, { Component, PropTypes } from 'react';
import { reduxForm, initialize } from 'redux-form';
import { editJoke, fetchJoke } from '../actions/index';import { Link } from 'react-router';
import axios from 'axios';

class JokeEditt extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    this.props.fetchJoke(this.props.params.id)
    .then(()=> {
      console.log(this.state);
    })

  }

  onSubmit(formData) {
    console.log('Edit form data...', formData);
    this.props.editJoke(this.props.params.id, formData)
    .then(() => {
      this.context.router.push('/');
    })
  }


  render() {
    const { fields: { title, genre, author, joke } , handleSubmit } = this.props;

    if(!joke) return (<div>Loading...</div>);

    return (
      <div>

      <div>
      <form className="animated bounceInDown" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
      <h3>Create A New Post</h3>
      <div className={ `form-group ${title.touched && title.invalid ? 'has-danger': ''}`}>
      <label>Title</label>
      <input type="text" className="form-control" {...title}/>
      <div className='text-help form-control-label'>{title.touched ? title.error : ''}</div>
      </div>

      <div className={ `form-group ${genre.touched && genre.invalid ? 'has-danger': ''}`}>
      <label>Genre</label>
      <input type="text" className="form-control" {...genre}/>
      <div className='text-help form-control-label'>{genre.touched ? genre.error : ''}</div>
      </div>

      <div className={ `form-group ${author.touched && author.invalid ? 'has-danger': ''}`}>
      <label>Author</label>
      <input type="text" className="form-control" {...author}/>
      <div className='text-help form-control-label'>{author.touched ? author.error : ''}</div>
      </div>

      <div className={ `form-group ${joke.touched && joke.invalid ? 'has-danger': ''}`}>
      <label>Content</label>
      <textarea type="text" className="form-control" {...joke}/>
      <div className='text-help form-control-label'>{joke.touched ? joke.error : ''}</div>
      </div>

      <Link to="/" className="btn btn-danger">Back</Link>
      <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      </div>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a Title';
  }
  if (!values.genre) {
    errors.genre = 'Enter a Genre';
  }
  if (!values.author) {
    errors.author = 'Enter an Author';
  }
  if (!values.joke) {
    errors.joke = 'Enter some Content';
  }
  return errors;
}

export default reduxForm({
  form: 'PostNewForm',
  fields: ['title', 'genre', 'author', 'joke'],
  validate: validate
}, (state) => {
  if(state.jokes.joke){
    return {
      initialValues: {
        title: state.jokes.joke.title,
        genre: state.jokes.joke.genre,
        author: state.jokes.joke.author,
        joke: state.jokes.joke.joke
      },
    };
  }
}, { editJoke, fetchJoke })(JokeEditt);
