import React from 'react';
import Main from '../components/Layouts/Main';
import Homepage from '../components/Home/Homepage';

export default function Index() {
  return (
    <Main>
      <Homepage />
    </Main>
  );
}

Index.getInitialProps = async () => {
  return { namespacesRequired: ['common'] }
}
