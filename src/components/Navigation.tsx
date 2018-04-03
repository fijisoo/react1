import * as React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Navigation extends React.Component {
    state = {
        current: 'mail',
    };
    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="mail">
                    <Link to="/users"><Icon type="table" />Table of Users</Link>
                </Menu.Item>
                <Menu.Item key="app">
                    <Link to="/add-user"><Icon type="user-add" />Add User</Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default Navigation;