import React, { Component } from 'react';
import { Link } from 'react-router';

//component
import { Layout } from 'antd';
import NavHeader from '../../components/navigation/header';
import NavFooter from '../../components/navigation/footer';

const { Content } = Layout;

class Main extends Component {
	render(){
		return(
			<div>
				<NavHeader />
				<Content>
					{
						React.cloneElement(this.props.children, this.props)
					}
				</Content>
				<NavFooter />
			</div>
			);
	}
}

export default Main;