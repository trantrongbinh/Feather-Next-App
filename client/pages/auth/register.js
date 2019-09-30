import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'next/router';
import { Form, Icon, Input, Button } from 'antd';
import PropTypes from 'prop-types';

import { withTranslation } from '../../i18n';
import { reqRegisterAuth } from '../../modules/auth/actions';
import { Link } from '../../routes/routes';
import { authValidate } from '../../config/validate';

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

    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { name, email, password, password_confirmation } = values;
        this.props.registerAuth({ name, email, password, password_confirmation }, this.props.router);
      }
    });
  };

  render () {
    const { form, t } = this.props;
    const { errors } = this.state;

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
        <Button type="primary" htmlType="submit" className="login-form-button">
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

const mapStateToProps = state => {
  return {
    auth : state.auth,
    alert: state.alert
  }
};

const mapDispatchToProps = dispatch => {
  return {
    registerAuth: (data, router) => {
      dispatch(reqRegisterAuth(data, router));
    }
  }
}

export default withRouter(
  compose(
    connect(mapStateToProps, mapDispatchToProps),
    withTranslation('auth')
  )(RegisterPage)
);
