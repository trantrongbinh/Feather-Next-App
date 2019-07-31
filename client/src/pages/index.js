import React from 'react'
import { connect } from 'react-redux'

import Page from '../components/page'

class Index extends React.Component {
  render () {
    return <Page title='Index Page' linkTo='/items' NavigateTo='Items Page' />
  }
}

export default connect()(Index)
