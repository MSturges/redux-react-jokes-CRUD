import React, { Component, PropTypes } from 'react';
import { reduxForm, initialize } from 'redux-form';
import { editJoke, fetchJoke } from '../actions/index';import { Link } from 'react-router';
import axios from 'axios';

class JokeEdit extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    this.props.fetchBlog(this.props.params.id)
  }


  onSubmit(formData) {
    console.log('Edit form data...', formData);
    this.props.editJoke(this.props.params.id, formData)
    .then(() => {
      this.context.router.push('/');
    })
  }


  render() {
    const { fields: { author, topic, content, image_url }, handleSubmit } = this.props;
    if(!blog) return (<div>Loading...</div>);

    return (
      <div>

        <div>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form blogItemContainer editForm">
            <Link to="/" className="btn link">Home</Link>
            <Link to={`/blogs/${this.props.params.id}`} className="btn link">Back</Link>
            <button
              onClick={this.onDeleteClick.bind(this)}
              className="btn formButtons">
              Delete
            </button>
            <h1>Edit Writing</h1>
            <div className={`form-group ${author.touched && author.invalid ? 'has-danger' : ''}`}>
              <label>Author</label>
              <div className="text-danger">
                {author.touched ? author.error : null}
              </div>
              <input type="text" className="form-control" {...author} />
            </div>
            <div className={`form-group ${topic.touched && topic.invalid ? 'has-danger' : ''}`}>
              <label>Topic</label>
              <div className="text-danger">
                {topic.touched ? topic.error : null}
              </div>
              <input type="text" className="form-control" {...topic} />
            </div>
            <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
              <label>Content</label>
              <div className="text-danger">
                {content.touched ? content.error : null}
              </div>
              <textarea type="text" className="form-control" {...content} />
            </div>
            <div className={`form-group ${image_url.touched && image_url.invalid ? 'has-danger' : ''}`}>
              <label>Image URL</label>
              <div className="text-danger">
                {image_url.touched ? image_url.error : null}
              </div>
              <input type="text" className="form-control" {...image_url} />
            </div>
            <button type="submit" className="btn formButtons">Submit</button>
            <Link to="/" className="btn formButtons">Cancel</Link>
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
  form: 'BlogsNewForm',
  fields: ['author', 'topic', 'content', 'image_url'],
  validate: validate
}, (state) => {
  if(state.blogs.blog){
    return {
      initialValues: {
        author: state.blogs.blog.author,
        topic: state.blogs.blog.topic,
        content: state.blogs.blog.content,
        image_url: state.blogs.blog.image_url
      },
    };
  }
}, { editJoke, fetchJoke })(JokeEdit);
