import React from 'react';
import { Link } from 'react-router';

const MobileList = (props) => {
  const MobileItems = props.jokes.map((joke) => {
    return (
      <li className="joke-li animated bounceInUp row" key={joke.id}>
      <div className="col-md-12 col-sm-12 col-xs-12 joke-details ">

      <h3>{joke.title}</h3>

      <ul className="fa-ul">
        <li><i className="fa-li fa fa-user-circle fa-3x " aria-hidden="true"></i>{joke.author}</li>
        <li><i className="fa-li fa fa fa-tags fa-3x " aria-hidden="true"></i>{joke.genre}</li>
      </ul>
      <div className="edit-btn-container">
        <Link className="edit-btn " to={"joke/" + joke.id}>Edit/Delete</Link>
      </div>

      </div>



      <p className="col-md-12 col-sm-12 col-xs-12 joke-list-joke">{joke.joke}</p>

      </li>
    );
  });

  return (
    <ul className="row">
    {MobileItems}
    </ul>
  );
};


export default MobileList;
