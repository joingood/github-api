import React from 'react';

//Complements
import axios from 'axios';

import '../../access/css/views/home/index.css';

//
import CardInfo from '../../components/CardInfo';


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: []};

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e){
    const _this = this;
    //return;
    if(e.key === "Enter"){

      if(e.target.value.length === 0){
        return;
      }
  
      axios.get(`https://api.github.com/search/repositories?q=${e.target.value}&order=desc`)
      .then(function ({ data }) {
        // handle success
        //console.log(data);
        _this.setState({data: data.items.slice(0,6)});
      })
  
    }
  }

  render() {

    const Da = this.state.data.map(obj=> <CardInfo key={obj.id} title={obj.full_name} body={obj.description} language={obj.language} start_count={obj.stargazers_count} open_issues={obj.open_issues} />)

    return (
      <div className="row">


        <div className="input-field col s6 offset-s3">
          <div className="card-panel">
            <input id="last_name" type="text" placeholder="Press enter for the search" onKeyUp={this.handleChange} className="validate"/>
            <label htmlFor="last_name">Search by name</label>
          </div>
        </div>

        <div className="col s12">
          <p className="p-msj-found"> {this.state.data.length} RESULTS FOUND</p>
        </div>

        <div className="col s12">

          <div className="row">

              {Da}

              {/* <CardInfo title="hola" /> */}
          </div>

        </div>


      </div>
    );
  }
}

export default Index;