import React from 'react';
import { withRouter } from 'next/router';
import { Form, Icon, Input, Button, Alert, Checkbox } from 'antd';
import PropTypes from 'prop-types';

import { withTranslation } from '../../i18n';
import { Link } from '../../routes/routes';
import { authValidate } from '../../config/validate';
import { PandaSvg } from '../../components/Partials/Icons';
import { loginAuth } from '../../services/auth';

import '../../less/auth.less';

const FormItem = Form.Item;

class Login extends React.Component {
  static getInitialProps () {
    return {
      namespacesRequired: ['auth']
    };
  }

  state = {
    email: '',
    password: '',
    error: '',
    errors: {},
    isError: false,
    isLoading: false,
  };

  rules = {
    email: [
      { required: true, message: this.props.t('validate.email.required') },
      {
        pattern: authValidate.email.pattern,
        message: this.props.t('validate.email.regex'),
      },
    ],
    password: [
      { required: true, message: this.props.t('validate.password.required') },
    ],
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { email, password } = values;

        try {
          this.setState({ isLoading: true });
          const token = await loginAuth({ email, password });

          if (token) {
            this.props.router.push('/');
          }
        } catch (err) {
          this.setState({ isLoading: false });

          if (err.errors && Object.keys(err.errors).length !== 0) {
            this.setState({
              isError: true,
              errors: err.errors,
            });
          } else {
            this.setState({
              isError: true,
              error: this.props.t('invalid_account'),
            });
          }
        }
      }
    });
  };

  handleClickInput = () => {
    this.setState({ isError: false });
  }

  render() {
    const { isError, isLoading, error } = this.state;
    const { t, form } = this.props;

    return (
      <React.Fragment>
        <Form onSubmit={this.handleSubmit} className="auth-form">
          <h2 className="logo">
            <Icon style={{ fontSize: 100, color: '#40A9FF' }} theme="outlined" component={PandaSvg} />
          </h2>
          { isError && (
            <Form.Item>
              <Alert message={t('login_error')} description={error} type="error" showIcon />
            </Form.Item>
          )}
          <FormItem
            help={
              form.getFieldError('email') ? form.getFieldError('email') : ''
            }
          >
            {form.getFieldDecorator('email', {
              validateFirst: true,
              rules: this.rules.email,
            })(
              <Input
                prefix={<Icon type="mail" />}
                placeholder={t('email')}
                type="text"
                onClick={this.handleClickInput}
              />
            )}
          </FormItem>
          <FormItem
            help={
              form.getFieldError('password') ? form.getFieldError('password') : ''
            }
          >
            {form.getFieldDecorator('password', {
              validateFirst: true,
              rules: this.rules.password,
            })(
              <Input
                prefix={<Icon type="lock" />}
                type="password"
                placeholder={t('password')}
              />
            )}
          </FormItem>
          <FormItem>
            {form.getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>{t('remember_me')}</Checkbox>)}
            <a className="login-form-forgot" href="">
              {t('forgot_password')}
            </a>

            <Button type="primary" htmlType="submit" className="login-form-button" loading={isLoading}>
              {t('login')}
            </Button>
            {t('or')}
            <Link route='register'>
              <a href=""> {t('redirect_to_register')}</a>
            </Link>
          </FormItem>
        </Form>
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  t: PropTypes.func.isRequired,
}

const LoginPage = Form.create()(Login);

export default withRouter(withTranslation('auth')(LoginPage));
