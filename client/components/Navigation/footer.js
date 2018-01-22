import React, {Component} from 'react';

//component
import {Layout} from 'antd';


const {Footer} = Layout;

class NavFooter extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Footer
				className="footer"
			>
				<p>Built using Ant Design &copy; {(new Date()).getUTCFullYear()} </p>
			</Footer>
			);
	}
}

export default NavFooter;