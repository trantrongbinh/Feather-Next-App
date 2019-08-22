import React from 'react';
import { Row, Col } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col md={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Ant Design</h2>
              <div>
                <a target="_blank " href="https://github.com/ant-design/ant-design">
                  GitHub
                </a>
              </div>
              <div>
                <a href="http://pro.ant.design">Ant Design Pro</a>
              </div>
              <div>
                <a href="http://mobile.ant.design">Ant Design Mobile</a>
              </div>
              <div>
                <a href="http://ng.ant.design">NG-ZORRO</a>
                <span> - </span>
                Ant Design of Angular
              </div>
            </div>
          </Col>
          <Col md={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Community</h2>
              <div>
                <a href="http://scaffold.ant.design">Scaffolds</a>
                <span> -  Awesome Ant Design </span>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="http://ux.ant.design">Ant UX</a>
                <span> - Work with Us </span>
              </div>
            </div>
          </Col>
          <Col md={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Help</h2>
              <div>
                <a href="/changelog">
                  Change Log
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ant-design/ant-design/wiki/FAQ">
                  GitHub
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://gitter.im/ant-design/ant-design">
                  Chat Room (English)
                </a>
              </div>
            </div>
          </Col>
          <Col md={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>
                <img className="title-icon" src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg" alt="" />
                More Products
              </h2>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://antv.alipay.com/">FengDie</a>
                <span> - Mobile web app builder </span>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://eggjs.org/">Egg</a>
                <span> - Enterprise Node Framework </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col md={4} sm={24} />
        <Col md={20} sm={24}>
          <span style={{ marginRight: 12 }}>Feather-Next App</span>
          <span style={{ marginRight: 12 }}>Copyright © TTB</span>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
