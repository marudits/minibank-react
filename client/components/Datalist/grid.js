import React, {Component} from 'react';

//component
import {Button, Card, Col, Icon, Row} from 'antd';
import Photo from '../Item/photo';

//css
import './style.styl';

class Grid extends Component {
	constructor(props){
		super(props);

		this.state = {
			items: []
		}
	}

	render(){
		let posts = this.props.posts || [],
			comments = this.props.comments || {};

		let Cards = posts.map((post, i) => {
			return(
				<Col 
					xs={{span: 12}}
					sm={{span: 8}}
					md={{span: 6}}
					key={i}
					>
					<Photo 
						key={i}
						i={i}
						post={post}
						comments={comments[post.code] || []}
						/>
				</Col>
				);
			
		});
		return(
			<Row gutter={16}>
				{Cards}	
			</Row>
			);
	}
}

export default Grid;