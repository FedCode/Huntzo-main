import React from 'react';
import { Menu, Grid } from 'antd';
import dropdown from '../../assets/images/chevron-down.svg';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const LeftMenu = () => {
  const { lg } = useBreakpoint()
  return (
    <Menu mode={lg ? "horizontal" : "inline"}>
      {/* <Menu.Item key="mail">
        <a href="">Home</a>
      </Menu.Item> */}
      <SubMenu key="sub1" title={<span>Home <img className='mob-hide' src={dropdown} alt=''/></span> }>
        <MenuItemGroup title="">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </MenuItemGroup>
        
      </SubMenu>
      <SubMenu key="sub2" title={<span>listings <img className='mob-hide' src={dropdown} alt=''/></span> }>
        <MenuItemGroup title="">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </MenuItemGroup>
        
      </SubMenu>
      <SubMenu key="sub3" title={<span>Features <img className='mob-hide'  src={dropdown} alt=''/></span> }>
        <MenuItemGroup title="">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </MenuItemGroup>
       </SubMenu>
      <SubMenu key="sub4" title={<span>pages <img className='mob-hide' src={dropdown} alt=''/></span> }>
        <MenuItemGroup title="">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </MenuItemGroup>
      
      </SubMenu>
      
      {/* <Menu.Item key="alipay">
        <a href="">Contact Us</a>
      </Menu.Item> */}
    </Menu>

  );
}

export default LeftMenu;