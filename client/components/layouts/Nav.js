import React from 'react';
import { Menu, Icon, Radio } from 'antd';

const { SubMenu } = Menu;

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      locale: 'en',
      current: 'home',
    };
  }

  changeLocale = e => {
    const localeValue = e.target.value;
    this.setState({ locale: localeValue });
  };

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    const { locale } = this.state;

    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        style={{ lineHeight: '50px' }}
      >
        <Menu.Item key="home">
          <Icon type="home" />
          Home
        </Menu.Item>
        <Menu.Item key="app" disabled>
          <Icon type="appstore" />
          Menu 1
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="setting" />
              Menu 2
            </span>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item className="lang" style={{ float: 'right' }}>
          <Radio.Group value={locale} onChange={this.changeLocale}>
            <Radio.Button key="en" value="en">
              English
            </Radio.Button>
            <Radio.Button key="vn" value="vn">
              VietNam
            </Radio.Button>
          </Radio.Group>
        </Menu.Item>
        <Menu.Item key="signup" style={{ float: 'right' }}>
          <a href="/signup">
            <Icon type="form" /> Sign up
          </a>
        </Menu.Item>
        <Menu.Item key="login" style={{ float: 'right' }}>
          <a href="/login">
            <Icon type="login" /> Login
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Nav
