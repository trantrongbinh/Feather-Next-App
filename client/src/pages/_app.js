import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'

import { appWithTranslation, i18n } from '../i18n'
import configureStore from '../redux/store'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }

    i18n.language = 'en';

    return { pageProps }
  }

  render() {
    const { Component, pageProps, store } = this.props

    return (
      <Container>
        <Head>
          <title>TTB</title>
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(configureStore)(
  withReduxSaga(appWithTranslation(MyApp))
);
