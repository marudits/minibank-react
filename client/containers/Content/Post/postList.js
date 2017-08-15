import React, {Component} from 'react';

//component
import {Button, Card, Col, Icon, Row} from 'antd';
import Grid from '../../../components/Datalist/grid';

//css
import './style.styl';

class postList extends Component {
	constructor(props){
		super(props);

		this.state = {
			items: []
		}
	}

	componentWillMount(){
		this.props.loanActions.getListLoan();
	}

	render(){
		return(
			<div className="datalist-grid">
				<Grid 
					posts={this.props.posts}
					comments={this.props.comments}
				/>
			</div>
			);
	}
}

export default postList;