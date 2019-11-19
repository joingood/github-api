import React from 'react';

// function Index() {
  
// }

//export default Index;


class ContributorsByPostId extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Id: props.match.params.id
    };
    
  }

  render() {
    return (
      <div>
          constributors
      </div>
    );
  }
}
export default ContributorsByPostId;