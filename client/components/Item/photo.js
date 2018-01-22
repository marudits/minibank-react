import React, {Component} from 'react';
import {Link} from 'react-router';

import CSSTransitionGroup from 'react-addons-css-transition-group';

//component
import {Button, Card, Col, Icon, Row} from 'antd';

//css
import './style.styl';

class Photo extends Component {
	constructor(props){
		super(props);

		this.state = {
			isLoading: true,
			item: {}
		}
	}

	componentDidMount(){
		this.setState({isLoading: false})
	}

	
	render(){
		let {post, i, comments} = this.props,
			numLikes = post.likes,
			numComments = comments ? comments.length : 0; 
		return(
			<Card
				loading={this.state.isLoading}
				className="grid-figure"
			>
				<Link to={`/view/${post.code}`}>
					<div className="grid-card__image">
						<img alt={post.caption} src={post.display_src}/>
					</div>
					<div className="grid-card__caption">
						<h3>{post.caption}</h3>
						<p>{post.display_src}</p>
					</div>	
				</Link>

				<CSSTransitionGroup
					transitionName="like"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}
				>
					<span key={numLikes} className="likes-heart">{numLikes}</span>
				</CSSTransitionGroup>

				<Row gutter={16}>
					<Col span={12}>
						<Button 
							key={numLikes} 
							icon="heart" 
							size="default" 
							onClick={() => this.props.increment(i)}
							>
							&nbsp;{numLikes}
						</Button>
					</Col>	
					<Col span={12}>
						<Link to={`/view/${post.code}`}>
							<Button key={numComments} icon="message" size="default">&nbsp;{numComments}</Button>	
						</Link>
					</Col>	
				</Row>
			</Card>
			);
	}
}

export default Photo;