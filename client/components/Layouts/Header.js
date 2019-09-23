import React from 'react';
import PropTypes from 'prop-types';
import Head from './Head';
import { Layout } from 'antd';
import Nav from './Nav';

const { Header } = Layout;

export default function MyHeader({ path, pageTitle, ogImage }) {
  return (
    <>
      <Head title={pageTitle} ogImage={ogImage} path={path} />
      <Header id="header">
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
