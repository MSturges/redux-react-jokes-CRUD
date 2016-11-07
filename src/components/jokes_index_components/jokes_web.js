import React from 'react';
import { Link } from 'react-router';

const WebList = (props) => {
  const WebItems = props.jokes.map((joke) => {
    return (
      <li className="joke-li animated bounceInLeft row" key={joke.id}>

      <div className="col-lg-2 col-md-2 col-lg-2 joke-details ">

        <h3>{joke.title}</h3>

        <ul className="fa-ul">
          <li><i className="fa-li fa fa-user-circle fa-3x " aria-hidden="true"></i>{joke.author}</li>
          <li><i className="fa-li fa fa fa-tags fa-3x " aria-hidden="true"></i>{joke.genre}</li>
        </ul>

        <div className="edit-btn-container">
          <Link className="edit-btn"to={"joke/" + joke.id}>Edit/Delete</Link>
        </div>

      </div>

      <p className="col-lg-10 col-md-10 col-sm-10 col-xs-10 joke-list-joke">{joke.joke}</p>

      </li>
    );
  });

  return (
    <ul className="row">
    {WebItems}
  </ul>
  );
};


export default WebList;
