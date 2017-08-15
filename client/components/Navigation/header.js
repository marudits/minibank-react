import React, {Component} from 'react';
import {Link} from 'react-router'

//component
import {Layout, Menu,} from 'antd';

//style
import './style.styl';


const {Header} = Layout;

class NavHeader extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Header className="header">
				<Link to="/" >
					<div className="logo">
						<p>AdmInv</p>
					</div>
				</Link>
				<Menu
					theme="dark"
        			mode="horizontal"
        			defaultSelectedKeys={['2']}
        			className="header-menu"
				>
					<Menu.Item key={1} className="header-menu__item">Menu 1</Menu.Item>
					<Menu.Item key={2} className="header-menu__item">Menu 2</Menu.Item>
					<Menu.Item key={3} className="header-menu__item">Menu 3</Menu.Item>
				</Menu>
			</Header>
			);
	}
}

export default NavHeader;