import React, { Component } from 'react';
import { Menu } from 'antd';
import {
  
  Link
} from "react-router-dom";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class LeftMenu extends Component {
  render() {
    return (
   <Menu mode="horizontal" theme="dark">
        <SubMenu title={<Link to="/about">About Us</Link>}>
          <MenuItemGroup>
          <Menu.Item key="setting:1"><Link to="/company"> Company </Link></Menu.Item>
            <Menu.Item key="setting:1"><Link to="/vision"> Vision & Mission </Link></Menu.Item>
            <Menu.Item key="setting:1"><Link to="/portfolio"> Portfolio </Link></Menu.Item>
            <Menu.Item key="setting:1"><Link to="/team"> Team </Link></Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu title={<Link to="/shop">For Business</Link>}>
        <SubMenu title="Who we are?">
          </SubMenu>
        <SubMenu title="What we offer"> 
            <Menu.Item key="setting:1">Aerospace Solutions</Menu.Item>
            <Menu.Item key="setting:1">Automobile Solutions</Menu.Item>
            <Menu.Item key="setting:1">Energy Solutions</Menu.Item>
            <Menu.Item key="setting:1">Corporate Solutions</Menu.Item>
            <Menu.Item key="setting:1">E-Governance Solutions</Menu.Item>
            <Menu.Item key="setting:1">Fintech Solutions</Menu.Item>
          </SubMenu>
          <SubMenu title="Products">
          <SubMenu title="Hardware">
          <Menu.Item key="setting:1">Drone Technology</Menu.Item>
            <Menu.Item key="setting:1">Gaming</Menu.Item>
            </SubMenu>
            <SubMenu title="Software">
          <Menu.Item key="setting:1">Drone Firmware Software</Menu.Item>
            <Menu.Item key="setting:1">Alladin Payroll & HMIS</Menu.Item>
            <Menu.Item key="setting:1">Pay-Alladin</Menu.Item>
            </SubMenu>                  
          </SubMenu>
          <MenuItemGroup title="Services">
            </MenuItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}
export default LeftMenu;
