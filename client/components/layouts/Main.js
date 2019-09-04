import React from 'react';
import { Layout } from 'antd';
import MyHeader from './Header';
import MyFooter from './Footer';

const { Content } = Layout;

class Main extends React.PureComponent {
  constructor() {
    super();
  }

  render() {
    const { path, children, pageTitle, ogImage, isMobile } = this.props;

    return (
      <Layout className='layout'>
        <MyHeader isMobile={isMobile} path={path} pageTitle={pageTitle} ogImage={ogImage} />
        <Content className='main-content'>{children}</Content>
        <MyFooter />
      </Layout>
    );
  }
}

export default Main
