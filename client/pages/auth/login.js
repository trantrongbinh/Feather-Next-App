import React from 'react';
import Login from '../../components/auth/Login';

import '../../less/auth.less';

class LoginPage extends React.Component {
  static getInitialProps ({ctx}) {
      return {
        namespacesRequired: ['common']
      }
  }

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <>
        <Login />
      </>
    )
  }
}

export default LoginPage;
