/*
    This component is responsible for returning the view of the repositories information, making it maintainable
*/

import React from 'react'; //react
import '../access/css/conponents/CardInfo.css'; //Load css

import { Link } from "react-router-dom"; //load link for redirect

function Index(props) {
  return (
    <div className="col s12 m12">

        <div className="card blue-grey darken-1">
            <div className="card-content white-text">
            <span className="card-title"> <Link to={`/Post/ContributorsByPostId/${props.data.owner.login}/${props.data.name}`}>{props.data.full_name}</Link> </span>
            <span className="cart-info-sub-title">{props.data.language}</span>
            <p>{props.data.description}</p>
            </div>
            <div className="card-action">
                <a href="#!" className="yellow-text darken-4"> <i className="material-icons">star</i> {props.data.stargazers_count} </a>
                <a href="#!" className="red-text darken-4"> <i className="material-icons">warning</i> {props.data.open_issues} </a>
            </div>
        </div>

    </div>
  );
}

export default Index;
