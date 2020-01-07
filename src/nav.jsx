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
            <Menu.Item key="setting:1"><Link to="/aeropace-solutions">Aerospace Solutions</Link></Menu.Item>
            <Menu.Item key="setting:1"><Link to="/automobile-solutions"> Automobile Solutions</Link></Menu.Item>
            <Menu.Item key="setting:1"><Link to="/energy-solutions"> Energy Solutions</Link></Menu.Item>
            <Menu.Item key="setting:1"><Link to="/corporate-solutions">Corporate Solutions</Link></Menu.Item>
            <Menu.Item key="setting:1"><Link to="/e-governance-solutions">E-Governance Solutions</Link></Menu.Item>
            <Menu.Item key="setting:1"><Link to="/fintech-solutions">Fintech Solutions</Link></Menu.Item>
          </SubMenu>
          <SubMenu title="Products">
          <SubMenu title="Hardware">
          <Menu.Item key="setting:1"><Link to="/drone">Drone Technology</Link></Menu.Item>
            <Menu.Item key="setting:1"><Link to="/gaming">Gaming</Link></Menu.Item>
            </SubMenu>
            <SubMenu title="Software">
          <Menu.Item key="setting:1"><Link to="/firmware">Drone Firmware Software</Link></Menu.Item>
            <Menu.Item key="setting:1"><Link to="alladin">Alladin Payroll & HMIS</Link></Menu.Item>
            <Menu.Item key="setting:1"><Link to="pay">Pay-Alladin</Link></Menu.Item>
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