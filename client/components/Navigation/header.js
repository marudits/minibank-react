import React, { Component } from 'react';
import { Link } from 'react-router'

//assets
import { CONFIG } from "../../assets/config";

//component
import { Layout, Menu } from 'antd';
const { Header } = Layout;

//style
import './style.styl';

class NavHeader extends Component {
	constructor(props){
		super(props);
	}

	setMenuItem(){
		return CONFIG.MENU.map((x) => {
			return (
				<Menu.Item key={x.ID} className="header-menu__item">
					<Link to={x.URL}>{x.LABEL}</Link>
				</Menu.Item>
				)
		})
	}

	render(){
		return(
			<Header className="header">
				<Link to="/" >
					<div className="logo">
						<p></p>
					</div>
				</Link>
				<Menu
					theme="dark"
        			mode="horizontal"
        			defaultSelectedKeys={['1']}
        			className="header-menu"
				>
					{
						this.setMenuItem()
					}
				</Menu>
			</Header>
			);
	}
}

export default NavHeader;