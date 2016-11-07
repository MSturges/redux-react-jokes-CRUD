import React from 'react';
import { Link } from 'react-router';

const MobileList = (props) => {
  const MobileItems = props.jokes.map((joke) => {
    return (
      <li className="joke-list animated bounceInUp row" key={joke.id}>
      <div className="col-md-6 col-sm-6 col-xs-6 joke-list-item-container ">

      <h5 className="firstH3"><span className="">Title</span></h5>
      <h4 className="joke-list-item">{joke.title}</h4>

      <h5><span className="">Genre</span></h5>
      <h4 className="joke-list-item">{joke.genre}</h4>

      <h5><span className="">Author</span></h5>
      <h4 className="joke-list-item">{joke.author}</h4>

      </div>

      <div className="col-md-5 col-sm-5 col-xs-5 joke-list-edit">
        <Link to={"joke/" + joke.id}>Edit/Delete</Link>
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
