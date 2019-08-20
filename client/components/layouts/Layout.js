import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout ({ path, children, pageTitle, ogImage }) {
  return (
    <>
      <Header path={path} pageTitle={pageTitle} ogImage={ogImage} />

      <main>{children}</main>

      <Footer />
    </>
  )
}

export default Layout
