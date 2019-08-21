import React from 'react';
import Banner from './Banner';

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { isMobile } = this.props;

    return (
        <div className="page-wrapper home">
          <Banner isMobile={isMobile} />
        </div>
    );
  }
}

export default Home;
