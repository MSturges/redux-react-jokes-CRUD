import React from 'react';
import { Link } from 'react-router';

const WebList = (props) => {
  const WebItems = props.jokes.map((joke) => {
    return (
      <li className="joke-list animated bounceInLeft row" key={joke.id}>
      <div className="col-md-2 col-lg-2 joke-list-item-container ">

      <h3 className="firstH3"><span className="">Title</span></h3>
      <h4 className="joke-list-item">{joke.title}</h4>

      <h3><span className="">Genre</span></h3>
      <h4 className="joke-list-item">{joke.genre}</h4>

      <h3><span className="">Author</span></h3>
      <h4 className="joke-list-item">{joke.author}</h4>

      </div>
      <p className="col-md-8 col-sm-8 col-xs-8 joke-list-joke">{joke.joke}</p>
      <div className="col-md-2 joke-list-edit">
      <Link to={"joke/" + joke.id}>Edit/Delete</Link>
      </div>
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
