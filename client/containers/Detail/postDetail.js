import React, {Component} from 'react';
import {Link} from 'react-router';

import CSSTransitionGroup from 'react-addons-css-transition-group';

//component
import {Button, Card, Col, Form, Icon, Input, Row} from 'antd';
import Photo from '../../components/Item/photo';
import List from '../../components/Datalist/timeline';
import FormComment from '../../components/Form/comment'

//css
import './style.styl';

class DetailPost extends Component {
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

	handleSubmit(e){
		e.preventDefault();
	}

	render(){
		console.log('postDetail: this.props: ', this.props)

		const {postId} = this.props.params
		const i = this.props.posts.findIndex(
			(post) => post.code === postId
			);
		const post = this.props.posts[i];

		let {comments} = this.props,
			postComments = this.props.comments[postId] || [];

		postComments.forEach((item, i) => {
			item.title = item.user
		});


		return(
			<Row gutter={16} className="detail">
				<Col 
					xs={{span: 24}} 
					sm={{span: 12, offset: 3}}
					className="detail-post">
					<Photo 
						i={i} 
						post={post} 
						comments={postComments}						
						/>
				</Col>
				<Col 
					xs={{span: 24}} 
					sm={{span: 6}}
					className="detail-comment">
					<Row className="detail-comment__list">
						<List items={postComments} />
					</Row>
					<Row className="detail-comment__form">
						<FormComment />
					</Row>
					
				</Col>
			</Row>
			);
	}

}

export default DetailPost;