import React from 'react';
import { Menu, Icon, Radio, Row, Col } from 'antd';

import { Link } from '../../routes/routes';
import { i18n, withTranslation } from '../../i18n';

const { SubMenu } = Menu;

import Cookies from 'js-cookie';

class Nav extends React.Component {
  constructor() {
    super();

    this.state = {
      locale: '',
      current: 'home',
    };
  }

  componentDidMount() {
    const lang = Cookies.get('next-i18next');
    this.setState({ locale: lang });
  }

  changeLocale = e => {
    const localeValue = e.target.value;
    this.setState({ locale: localeValue });

    return i18n.changeLanguage(localeValue)
  };

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    const { locale } = this.state;

    return (
      <Row>
        <Col lg={4}>
          <Link route='home'>
            <a id="logo">
              <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
              <img alt="Ant Design" src="https://gw.alipayobjects.com/zos/rmsportal/DkKNubTaaVsKURhcVGkh.svg" />
            </a>
          </Link>
        </Col>
        <Col lg={20}>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            style={{ lineHeight: '64px', float: 'right' }}
          >
            <Menu.Item key="post">
              <Link route='post' params={{slug: 'hello-world'}}>
                <a>{this.props.t('common:home')}</a>
              </Link>
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
            <Menu.Item key="login">
              <Link route='login'>
                <a><Icon type="form" /> {this.props.t('common:login')}</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="signup">
              <Link route='register'>
                <a><Icon type="form" /> {this.props.t('common:register')}</a>
              </Link>
            </Menu.Item>
            <Menu.Item className="lang">
              <Radio.Group value={locale} onChange={this.changeLocale}>
                <Radio.Button key="en" value="en">
                  English
                </Radio.Button>
                <Radio.Button key="vi" value="vi">
                  VietNam
                </Radio.Button>
              </Radio.Group>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    );
  }
}

export default withTranslation('common')(Nav)
