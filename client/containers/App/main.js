import React, {Component} from 'react';
import {Link} from 'react-router';

//component
import {Layout} from 'antd';
import NavHeader from '../../components/Navigation/header';
import NavFooter from '../../components/Navigation/footer';

const {Content} = Layout;

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