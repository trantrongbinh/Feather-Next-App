import React from 'react';
import Login from '../../components/Auth/Login';

import '../../less/auth.less';

export default function LoginPage() {
  return (
    <Login />
  );
}

LoginPage.getInitialProps = async () => {
  return { namespacesRequired: ['common'] }
}
