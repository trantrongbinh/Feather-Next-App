import React from 'react'
import PropTypes from 'prop-types'
import Head from './Head'
import Nav from './Nav'

function Header ({ path, pageTitle, ogImage }) {
  return (
    <>
      <Head title={pageTitle} ogImage={ogImage} />

      <header>
        <Nav />
      </header>
    </>
  )
}

Header.propTypes = {
  path: PropTypes.string,
  pageTitle: PropTypes.string,
  ogImage: PropTypes.string
}

export default Header
