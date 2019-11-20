/*
  this view is the one that encapsulates the taxpayers
*/

import React from 'react';
import axios from 'axios'; //library to make http requests

import CardContributors from '../../components/CardContributors'; //component to show taxpayers

class ContributorsByPostId extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      params: props.match.params,
      dataSource: []
    };
    //preparing the function that will look for the data in the api
    this.handleSearch = this.handleSearch.bind(this);
    //requesting the data to the app
    this.handleSearch();
    
  }

  //This function is responsible for doing the taxpayers search
  handleSearch(page = 1){
    const _this = this;
    //calculation for the page = ( length data / limit )+ 1
    page = (this.state.dataSource.length / 10) + 1;

    console.log(page);

    //making the http request to get the data
    axios.get(`https://api.github.com/repos/${_this.state.params.owner}/${_this.state.params.repo}/contributors?per_page=10&page=${page}`)
    .then(function ({data}) {
      //adding the array to the existing one
      let TmpData = _this.state.dataSource; //tmp data
      TmpData = TmpData.concat(data);
      //Set data
      _this.setState({dataSource: TmpData});

    });

  }

  render() {

    //loading the taxpayer letters and then showing it
    const Map = this.state.dataSource.map(obj=> <CardContributors key={obj.id} data={obj} />);
    //This is the moton to load more, where it is conditioned if you look for more data
    const Next = ((this.state.dataSource.length % 10) === 0 ? <a href="#!" onClick={this.handleSearch} className="waves-effect green accent-3 btn">Get More +</a> : <p className="text-bold"> :) </p>);
    
    return (
      <div>
        <ul className="collection">
          {Map}
        </ul>
        <div className="text-center">
          {Next}
        </div>
        
      </div>
    );
  }
}
export default ContributorsByPostId;