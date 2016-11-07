import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createJoke } from '../actions/index';
import { Link } from 'react-router';

class PostNew extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createJoke(props)
    .then(()=> {
      this.context.router.push('/')
    });
  }

  render() {

    const { fields: { title, genre, author, joke } , handleSubmit } = this.props;

    return (

      <form className="animated bounceInDown" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Joke</h3>
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

    );
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
  form: 'PostNewForm',
  fields: ['title', 'genre', 'author', 'joke'],
  validate
}, null, { createJoke })(PostNew);
