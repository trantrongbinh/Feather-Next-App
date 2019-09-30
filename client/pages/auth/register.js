import React from 'react';
import { withRouter } from 'next/router';
import { Form, Icon, Input, Button } from 'antd';
import PropTypes from 'prop-types';

import { withTranslation } from '../../i18n';
import { Link } from '../../routes/routes';
import { authValidate } from '../../config/validate';
import { registerAuth } from '../../services/auth';

import '../../less/auth.less';

const FormItem = Form.Item;

class Register extends React.Component {
  static getInitialProps () {
    return {
      namespacesRequired: ['auth']
    };
  }

  state = {
    errors: {},
    isLoading: false,
  };

  validateToNextPassword = async (rule, value) => {
    const form = this.props.form;

    if (value && this.state.confirmAgain) {
      form.validateFields(['password_confirmation'], { force: true });
    }
  };

  comparePassword = async (rule, value) => {
    const form = this.props.form;

    if (value && value !== form.getFieldValue('password')) {
      throw new Error(this.props.t('validate.password_confirmation.dont_match'));
    }
  };

  handleConfirmBlur = e => {
    const value = e.target.value;

    this.setState({ confirmAgain: this.state.confirmAgain || !!value });
  };

  rules = {
    name: [
      { required: true, message: this.props.t('validate.name.required') },
      {
        max: authValidate.name.maxLength,
        message: this.props.t('validate.name.length', {
          min: authValidate.name.minLength,
          max: authValidate.name.maxLength,
        }),
      },
      {
        min: authValidate.name.minLength,
        message: this.props.t('validate.name.length', {
          min: authValidate.name.minLength,
          max: authValidate.name.maxLength,
        }),
      },
    ],
    email: [
      { required: true, message: this.props.t('validate.email.required') },
      {
        pattern: authValidate.email.pattern,
        message: this.props.t('validate.email.regex'),
      },
      {
        max: authValidate.email.maxLength,
        message: this.props.t('validate.email.length', { max: authValidate.email.maxLength }),
      },
    ],
    password: [
      { required: true, message: this.props.t('validate.password.required') },
      {
        max: authValidate.password.maxLength,
        message: this.props.t('validate.password.length', {
          min: authValidate.password.minLength,
          max: authValidate.password.maxLength,
        }),
      },
      {
        min: authValidate.password.minLength,
        message: this.props.t('validate.password.length', {
          min: authValidate.password.minLength,
          max: authValidate.password.maxLength,
        }),
      },
      { validator: this.validateToNextPassword },
    ],
    password_confirmation: [
      { required: true, message: this.props.t('validate.password_confirmation.required') },
      { validator: this.comparePassword },
    ],
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { name, email, password, password_confirmation } = values;

        try {
          this.setState({ isLoading: true });
          const user = await registerAuth({ name, email, password, password_confirmation });

          if (user) {
            this.props.router.push('/auth/login');
          }
        } catch (err) {
          this.setState({ isLoading: false });

          if (err.errors && Object.keys(err.errors).length !== 0) {
            this.setState({ errors: err.errors });
          }
        }
      }
    });
  };

  render () {
    const { form, t } = this.props;
    const { errors, isLoading } = this.state;

    return (
      <Form onSubmit={this.onSubmit} className="auth-form">
        <FormItem
          help={
            form.getFieldError('name') ? form.getFieldError('name') : 
              (errors && errors.name ? <span className='error__message'>{ errors.name }</span> : '')
          }
        >
          {form.getFieldDecorator('name', {
            validateFirst: true,
            rules: this.rules.name,
          })(
            <Input
              prefix={<Icon type="user" />}
              placeholder={t('name')}
            />
          )}
        </FormItem>
        <FormItem
          help={
            form.getFieldError('email') ? form.getFieldError('email') : 
              (errors && errors.email ? <span className='error__message'>{ errors.email }</span> : '')
          }
        >
          {form.getFieldDecorator('email', {
            validateFirst: true,
            rules: this.rules.email,
          })(
            <Input
              prefix={<Icon type="mail" />}
              placeholder={t('email')}
            />
          )}
        </FormItem>
        <FormItem
          help={
            form.getFieldError('password') ? form.getFieldError('password') : 
              (errors && errors.password ? <span className='error__message'>{ errors.password }</span> : '')
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
              onBlur={this.handleConfirmBlur}
            />
          )}
        </FormItem>
        <FormItem
          help={
            form.getFieldError('password_confirmation') ? form.getFieldError('password_confirmation') : 
              (errors && errors.password_confirmation ? <span className='error__message'>{ errors.password_confirmation }</span> : '')
          }
        >
          {form.getFieldDecorator('password_confirmation', {
            validateFirst: true,
            rules: this.rules.password_confirmation,
          })(
            <Input
              prefix={<Icon type="lock" />}
              type="password"
              placeholder={t('password_confirmation')}
            />
          )}
        </FormItem>
        <Button type="primary" htmlType="submit" className="login-form-button" loading={isLoading}>
          { t('register') }
        </Button> <br /> <br />
        { t('or') }
        <Link route='login'>
          <a href=""> { t('redirect_to_login') }</a>
        </Link>
      </Form>
    )
  }
}

Register.propTypes = {
  t: PropTypes.func.isRequired,
}

const RegisterPage = Form.create()(Register);

export default withRouter(withTranslation('auth')(RegisterPage));
