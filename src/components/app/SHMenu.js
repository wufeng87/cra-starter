import React, { PropTypes } from 'react';

import { Menu, Icon } from 'antd';

const SHMenu = ( { menuMetaData, routeTo } ) => (
  <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} onClick={(selectedNodes, event) => routeTo(selectedNodes, event)}>
    <Menu.Item key="todo">
      <Icon type="user" />
      <span className="nav-text">todo</span>
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="video-camera" />
      <span className="nav-text">nav 2</span>
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="upload" />
      <span className="nav-text">nav 3</span>
    </Menu.Item>
    <Menu.Item key="4">
      <Icon type="user" />
      <span className="nav-text">nav 4</span>
    </Menu.Item>
  </Menu>
);

SHMenu.propTypes = {
  // type: PropTypes.oneOf( [
  //   'appear', 'fade-in'
  // ] )
};

export default SHMenu;
