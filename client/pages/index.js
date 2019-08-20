import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types'
import { Link } from '../routes/routes'
import { i18n, withTranslation } from '../i18n'

import { Breadcrumb } from 'antd'
import Main from '../components/layouts/Main'

export class Index extends React.Component {
  static async getInitialProps() {

    return {
      namespacesRequired: ['common']
    }
  }

  render () {
    return (
      <Main>
        <>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className='wrap-content'>Content</div>
        </>
      </Main>
    )
  }
}

export default compose(
  connect(),
  withTranslation('common')
)(Index);
