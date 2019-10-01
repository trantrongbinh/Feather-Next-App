import App from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';

import { appWithTranslation } from '../i18n';
import configureStore from '../redux/store';
import RedirectTo from '../components/Partials/RedirectTo';
import { getCookie } from '../utils/cookie';

import '../less/styles.less';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    
    if (ctx.isServer) {
      console.log(ctx.req.headers.cookie, 'server')
    } else {
      console.log(getCookie('token'), 'client')
    }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withRedux(configureStore)(
  withReduxSaga(appWithTranslation(MyApp))
);
