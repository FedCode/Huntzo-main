import React from 'react';
import { Menu, Grid } from 'antd';
import signin from '../../assets/images/user-interface.svg';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const RightMenu = () => {
  const { lg } = useBreakpoint();
  return (
    <Menu mode={ lg ? "horizontal" : "inline"}>
      <Menu.Item key="mail">
        <a href=""><span className='user-login'><img src={signin} alt='Logo' /></span> signin</a>
      </Menu.Item>
      <Menu.Item key="mail">
        <a href="" className='add-property'>Add property</a>
      </Menu.Item>
    </Menu>
  );
}

export default RightMenu;