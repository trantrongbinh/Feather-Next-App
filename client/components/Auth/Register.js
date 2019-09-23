import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import { Link } from '../../routes/routes';

class NormalRegisterForm extends React.Component {
  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.form.validateFields((err, values) => {
  //     if (!err) {
  //       console.log('Received values of form: ', values);
  //     }
  //   });
  // };

  render() {
    const { onSubmit } = this.props;
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={onSubmit} className="auth-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password_confirm', {
            rules: [{ required: true, message: 'Please input your password confirmation!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password_confirm"
              placeholder="Repeat password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('icheck', {
            valuePropName: 'checked',
            initialValue: false,
          })(<Checkbox>I agree to the <a className="login-form-forgot" href="">terms</a></Checkbox>)}
          <Button type="primary" htmlType="submit" className="login-form-button">
            Register
          </Button>
          Or
          <Link route='login'>
            <a href=""> Already have an account? Click Here.</a>
          </Link>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalRegisterForm = Form.create({ name: 'normal_register' })(NormalRegisterForm);

export default WrappedNormalRegisterForm;
