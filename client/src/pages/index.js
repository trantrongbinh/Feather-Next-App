import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types'

import Page from '../components/page'
import { i18n, withTranslation } from '../i18n'

export class Index extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common']
    }
  }

  render () {
    return (
      <React.Fragment>
        <h2>Index page</h2>
        <p>{this.props.t('name')}</p>
        <button
          type='button'
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'vi' : 'en')}
        >
          {this.props.t('change-locale')}
        </button>
        <Page title='Index Page' linkTo='/items' NavigateTo='Items Page' />
      </React.Fragment>
    )
  }
}

Index.propTypes = {
  t: PropTypes.func.isRequired,
}

export default compose(
  connect(),
  withTranslation('common')
)(Index);
