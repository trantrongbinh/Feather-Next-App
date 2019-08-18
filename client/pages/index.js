import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types'
import { Link } from '../routes/routes'
import { i18n, withTranslation } from '../i18n'

import MuiLink from '@material-ui/core/Link';

export class Index extends React.Component {
  static async getInitialProps() {

    return {
      namespacesRequired: ['common']
    }
  }

  changeLang = () => {
    return i18n.changeLanguage(i18n.language === 'en' ? 'vi' : 'en')
  };

  render () {
    return (
      <React.Fragment>
        <Link route='blog' params={{slug: 'hello-world'}}>
          <a>Hello world</a>
        </Link>
        <br />
        <Link route='/blog/another-blog-post'>
          <a>Another blog post</a>
        </Link>
        <br />
        <h2>Index page</h2>
        <p>{this.props.t('common:name')}</p>
        <button
          type='button'
          onClick={() => this.changeLang()}
        >
          {this.props.t('common:change-locale')}
        </button>
        <br />
        <Link route='items'>
          <a>Item page</a>
        </Link>
        <br />
        <MuiLink color="secondary" href="https://material-ui.com/">
          Material-UI.
        </MuiLink>
      </React.Fragment>
    )
  }
}

export default compose(
  connect(),
  withTranslation('common')
)(Index);
