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
      <h3>Edit Joke</h3>
      <div className={ `form-group ${title.touched && title.invalid ? 'has-danger': ''}`}>
      <label>Title</label>
      <input type="text" className="form-control" {...title}/>
      <div className='text-danger'>{title.touched ? title.error : ''}</div>
      </div>

      <div className={ `form-group ${genre.touched && genre.invalid ? 'has-danger': ''}`}>
      <label>Genre</label>
      <input type="text" className="form-control" {...genre}/>
      <div className='text-danger'>{genre.touched ? genre.error : ''}</div>
      </div>

      <div className={ `form-group ${author.touched && author.invalid ? 'has-danger': ''}`}>
      <label>Author</label>
      <input type="text" className="form-control" {...author}/>
      <div className='text-danger'>{author.touched ? author.error : ''}</div>
      </div>

      <div className={ `form-group ${joke.touched && joke.invalid ? 'has-danger': ''}`}>
      <label>Content</label>
      <textarea type="text" className="form-control" {...joke}/>
      <div className='text-danger'>{joke.touched ? joke.error : ''}</div>
      </div>

      <div className="submit-btn-container">
      <button type="submit" className="submit-btn">Submit</button>
      </div>
      <div className="back-btn-container">
        <Link to="/" className="back-btn">Back</Link>
      </div>

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
  if (values.title && values.title.length > 20) errors.title = 'Cannot exceed 20 characters';

  if (!values.genre) {
    errors.genre = 'Enter a Genre';
  }
  if (values.genre && values.genre.length > 20) errors.genre = 'Cannot exceed 20 characters';

  if (!values.author) {
    errors.author = 'Enter an Author';
  }
  if (values.author && values.author.length > 20) errors.author = 'Cannot exceed 20 characters';

  if (!values.joke) {
    errors.joke = 'Enter some Content';
  }
  if (values.joke && values.joke.length > 900) errors.joke = 'Cannot exceed 900 characters';

  return errors;
}

export default reduxForm({
  form: 'PostEditForm',
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
