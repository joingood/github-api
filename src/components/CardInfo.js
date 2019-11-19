import React from 'react';
import '../access/css/conponents/CardInfo.css';

function Index(props) {
  return (
    <div className="col s12 m4">

        <div className="card blue-grey darken-1">
            <div className="card-content white-text">
            <span className="card-title">{props.title}</span>
            <span className="cart-info-sub-title">{props.language}</span>
            <p>{props.body}</p>
            </div>
            <div className="card-action">
                <a href="#!" className="yellow-text darken-4"> <i className="material-icons">star</i> {props.start_count} </a>
                <a href="#!" className="red-text darken-4"> <i className="material-icons">warning</i> {props.open_issues} </a>
            </div>
        </div>

    </div>
  );
}

export default Index;
