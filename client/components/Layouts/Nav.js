import React from 'react';
import { Icon, Row, Col, Drawer } from 'antd';

import { Link } from '../../routes/routes';
import MyMenu from './Menu';

class Nav extends React.Component {
  constructor() {
    super();

    this.state = {
      visible: false,
    };
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <Row className="menu-custom">
        <Col lg={4}>
          <Link route='home'>
            <a id="logo">
              <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
              <img alt="Ant Design" src="https://gw.alipayobjects.com/zos/rmsportal/DkKNubTaaVsKURhcVGkh.svg" />
            </a>
          </Link>
        </Col>
        <Col lg={18} id="menu-horizontal">
          <MyMenu mode="horizontal" className="menu-horizontal" />
        </Col>
        <Col lg={2} id="menu-inline">
          <a onClick={this.showDrawer}>
            <Icon type="menu-fold" />
          </a>
          <Drawer
            title="Menu"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
            width={250}
            hideRequiredMark
          >
            <MyMenu mode="inline" className="menu-inline" />
          </Drawer>
        </Col>
      </Row>
    );
  }
}

export default Nav;
