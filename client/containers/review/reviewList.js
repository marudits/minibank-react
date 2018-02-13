import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//actions
import * as reviewActions from '../../actions/reviewActions';

//components
import ReviewForm from '../../components/review/reviewForm';

//helpers
import { objectListToArray, calculateDiffTime } from '../../utils/helpers/stringManipulation';

//library
import { Button, Icon, Input, Row, Col, List, Avatar } from 'antd';

//style
import "./reviewList.styl"

class ReviewList extends Component {
	constructor(props){
		super(props);

		this.data = null;

		this.state = {
			form: {
				name: null,
				email: null,
				text: null
			}
		}
	}

	componentWillMount(){
		this.setReviewList();
		this.data = this.props.review.list;
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.review.list && this.data !== nextProps.review.list){
			this.data = nextProps.review.list;
		}
	}

	addReview(){
		this.props.reviewActions.addReview();
	}

	clearForm(field = null){
		switch(field){
			case "name":
				this.setState({form: Object.assign({}, this.state.form, {name: null})});
				break;
			default:
				this.setState({form: {name: null, email: null, text: null}})
		}
	}

	setReviewList(){
		this.props.reviewActions.listReview();
	}

	render(){
		const { list, isTyping } = this.props.review;
		const data = objectListToArray(list).sort((a, b) => { return a.timestamp < b.timestamp });

		return(
			<div className="review-list">
				<header>
					<h3>Review List</h3>
				</header>
				<content>
					<Row gutter={16}>
						<Col span={8} className="review-form">
							<ReviewForm reviewActions={this.props.reviewActions} review={this.props.review}/>
						</Col>
						<Col span={16} className="review-list">
							<section>
								<header>
									<h4>
										Listing ({`${data.length} items`})
									</h4>
								</header>
								<content>
									{
										(() => {
											if(data && data.length > 0){
												return(
													<List
														itemLayout="horizontal"
														dataSource={data}
														renderItem={(item) => {
															const emailUrl = `mailto:${item.email}`
															return(
																<List.Item className="review-list__item">
																	<List.Item.Meta
																		avatar={<Avatar src="" className="item-avatar"/>}
																		title={<a href={emailUrl}>{item.name}</a>}
																		description={
																			<div>
																				<blockquote className="item-text">{item.text}</blockquote>
																				<span className="item-timestamp">{calculateDiffTime(item.timestamp)}</span>
																			</div>
																		}
	        														/>
																</List.Item>
															)
														}
														}
													/>
													)
											} else {
												return "No data found."
											}
										})()
									}
								</content>
								<footer></footer>
							</section>
						</Col>
					</Row>
				</content>
				<footer>
					
				</footer>
			</div>
			);
	}
}

function mapStateToProps (state) {
    return {
    	review: state.review
    }
}

function mapDispatchToProps(dispatch) {
    return {
        reviewActions : bindActionCreators(reviewActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);