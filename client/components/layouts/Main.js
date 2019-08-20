import React from 'react'
import { Layout } from 'antd'
import MyHeader from './Header'
import MyFooter from './Footer'

const { Content } = Layout;

function Main ({ path, children, pageTitle, ogImage }) {
  return (
    <Layout className='layout'>
      <MyHeader path={path} pageTitle={pageTitle} ogImage={ogImage} />

      <Content className='main-content'>
        {children}
      </Content>

      <MyFooter />
    </Layout>
  )
}

export default Main
