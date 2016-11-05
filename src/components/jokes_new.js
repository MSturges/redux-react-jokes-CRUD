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
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
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
  validate
}, null, { createJoke })(PostNew);
