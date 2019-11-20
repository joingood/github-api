/*
    This component is responsible for returning the view of the taxpayers, making it maintainable
*/

import React from 'react'; //React

function CardContributors(props) {
  return (
    <li className="collection-item avatar">
        <img src={props.data.avatar_url} alt="" className="circle"/>
        <span className="title"> <a href={props.data.html_url}>{props.data.login}</a> </span>
        <p  className="green-text darken-4" title="contributions"> <i className="material-icons">grade</i> {props.data.contributions} 
        </p>
    </li>
  );
}

export default CardContributors;
