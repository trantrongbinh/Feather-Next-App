import App from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { enquireScreen } from 'enquire-js';

import { appWithTranslation } from '../i18n';
import configureStore from '../redux/store';

import 'antd/dist/antd.less';
import '../less/styles.less';

let isMobile = false;

enquireScreen((b) => {
  isMobile = b;
});

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  constructor() {
    super();
    this.state = { isMobile };
  }

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }

  render() {
    const { Component, pageProps, store } = this.props;
    const { isMobile } = this.state;

    return (
      <Provider store={store}>
        <Component {...pageProps} isMobile={isMobile} />
      </Provider>
    )
  }
}

export default withRedux(configureStore)(
  withReduxSaga(appWithTranslation(MyApp))
);
