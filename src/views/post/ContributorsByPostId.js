import React from 'react';

import axios from 'axios';

import CardContributors from '../../components/CardContributors';

class ContributorsByPostId extends React.Component {
  constructor(props) {
    super(props);
    

    //console.log(props.match.params);
    

    this.state = {
      params: props.match.params,
      dataSource: []
    };

    this.handleSearch = this.handleSearch.bind(this);

    this.handleSearch();
    
  }

  handleSearch(){
    const _this = this;

    axios.get(`https://api.github.com/repos/${_this.state.params.owner}/${_this.state.params.repo}/contributors?per_page=10`)
    .then(function ({data}) {
      // handle success
      console.log(data);
      _this.setState({dataSource: data});
    });

  }

  render() {

    const Map = this.state.dataSource.map(obj=> <CardContributors key={obj.id} data={obj} />);

    const Next = ((this.state.dataSource.length % 10) === 0 ? <a href="#!" className="waves-effect waves-light btn">Get More +</a> : <p className="text-bold"> :) </p>);
    
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