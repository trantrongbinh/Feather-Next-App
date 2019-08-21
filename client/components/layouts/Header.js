import React from 'react';
import PropTypes from 'prop-types';
import Head from './Head';
import { Layout } from 'antd';
import Nav from './Nav';

const { Header } = Layout;

function MyHeader ({ path, pageTitle, ogImage }) {
  return (
    <>
      <Head title={pageTitle} ogImage={ogImage} path={path} />
      <Header>
        <Nav />
      </Header>
    </>
  )
}

MyHeader.propTypes = {
  path: PropTypes.string,
  pageTitle: PropTypes.string,
  ogImage: PropTypes.string
}

export default MyHeader
