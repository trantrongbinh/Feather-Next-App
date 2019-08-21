import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux'
import PropTypes from 'prop-types';
import { Link } from '../routes/routes';
import { i18n, withTranslation } from '../i18n';
import Main from '../components/layouts/Main';
import Home from '../components/home';

export class Index extends React.Component {
  static async getInitialProps() {

    return {
      namespacesRequired: ['common']
    }
  }

  render () {
    const { isMobile } = this.props;

    return (
      <Main isMobile={isMobile}>
        <Home isMobile={isMobile} />
      </Main>
    )
  }
}

export default compose(
  connect(),
  withTranslation('common')
)(Index);
