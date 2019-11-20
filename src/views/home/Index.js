import React from 'react';
import axios from 'axios';//library to make http requests

import '../../access/css/views/home/index.css'; //load css of this component

import CardInfo from '../../components/CardInfo'; //loading the view component


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], searching: false};

    this.handleChange = this.handleChange.bind(this);

  }
  //This function is responsible for triggering an event by pressing a key. is filtered to do the action when entering and doing the search
  handleChange(e){
    const _this = this;
    //return;
    if(e.key === "Enter"){

      if(e.target.value.length === 0){
        return;
      }

      _this.setState({searching: true});
      axios.get(`https://api.github.com/search/repositories?q=${e.target.value}&order=desc&per_page=6`)
      .then(function ({ data }) {
        // handle success
        _this.setState({data: data.items, searching: false});
      });
  
    }
  }

  render() {

    const Da = this.state.data.map(obj=> <CardInfo key={obj.id} data={obj} />)

    return (
      <div className="row">


        <div className="input-field col s6 offset-s3">
          <div className="card-panel">
            <input id="last_name" type="text" placeholder="Press enter for the search" onKeyUp={this.handleChange} className="validate"/>
            <label htmlFor="last_name">Search by name</label>
          </div>
        </div>

        <div className="col s12">
          <p className="p-msj-found"> { this.state.searching ? "Searching..." : (this.state.data.length +" RESULTS FOUND") } </p>
        </div>

        <div className="col s12">

          <div className="row">

              {Da}

          </div>

        </div>


      </div>
    );
  }
}

export default Index;