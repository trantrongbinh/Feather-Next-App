import React from 'react';
import Main from '../components/Layouts/Main';
import Homepage from '../components/Home/Homepage';

import { Layout } from 'antd';

const { Content } = Layout;

export default function Index() {
  return (
    <Main>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Homepage />
      </Content>
    </Main>
  );
}

Index.getInitialProps = async () => {
  return { namespacesRequired: ['common'] }
}
