import React from 'react';
import { withTranslation } from '../i18n';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;

    return {
      namespacesRequired: ['common'],
      statusCode
    };
  }

  render() {
    return (
      <p>
        {this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    );
  }
}

export default withTranslation('common')(Error);
