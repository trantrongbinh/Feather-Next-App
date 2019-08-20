import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types'
import { Link } from '../routes/routes'
import { i18n, withTranslation } from '../i18n'

import { Carousel } from 'antd'
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
          <Carousel>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
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
