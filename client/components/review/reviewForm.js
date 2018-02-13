import React, { Component } from 'react';
import { render } from 'react-dom';

//assets
import { CONFIG } from '../../assets/config';
import { LABEL } from '../../assets/label';

//library
import { Input, Button, Icon } from 'antd';
const { TextArea } = Input;

class ReviewForm extends Component {
	constructor(props){
		super(props);

		this.state = {
			form: {
				name: null,
				email: null,
				text: null
			},
			isTyping: null,
			validation: {
				name: {
					error: null,
					message: null
				},
				email: {
					error: null,
					message: null
				},
				text: {
					error: null,
					message: null
				}
			}
		}

		this.isTyping = null;

		this.dataIsTyping = null;
	}

	componentWillMount(){
		this.props.reviewActions.getIsTyping();
	}

	handleChange(e, field){
		let newState = this.state.form;
		newState[field] = e.target.value;
		this.setState({form: newState});
		
		const { name, email, text } = this.state.form;
		if(name && field === 'text'){
	
			this.resetTimer(name);

			this.props.reviewActions.isTypingReview(name.trim(), text);
		}
	}

	handleSubmit(e, form){
		const { name, email, text } = this.state.form;
		if(this.validateForm()){
			this.props.reviewActions.addReview(name, email, text);
			this.handleReset();
		}
		
		this.stoppedTyping(name);
	}

	handleReset(field = null){
		let newForm = {},
			newValidation = this.state.validation;

		//reset form
		for(let key in this.state.form){
			newForm[key] = field ? (key == field ? null :  this.state.form[key]) : null
		}

		for(let key in newValidation){
			newValidation[key].error = null;
			newValidation[key].message = null;
		}

		this.setState({form: newForm, validation: newValidation});
	}

	resetTimer(name) {
		if(this.isTyping){
			clearTimeout(this.isTyping);
			this.isTyping = null;
		}

		let that = this;
		this.isTyping = setTimeout(function(){that.stoppedTyping(name)}, 5000);
	}

	stoppedTyping(name){
		if(this.isTyping){
			this.isTyping = null;
			this.props.reviewActions.isFinishTypingReview(name);
		}
	}

	validateForm(){
		const { name, email, text } = this.state.form;
		let { validation } = this.state;

		//validate name
		if(!name || name.trim().length <= 0){
			validation.name.error = true;
			validation.name.message = LABEL.VALIDATION.COMMON.MESSAGE.REQUIRED;
			this.setState({validation: validation})
			return false;
		} else {
			validation.name.error = null;
			validation.name.message = null;
		}

		//validate text
		if(!text || text.trim().length <= 0){
			validation.text.error = true;
			validation.text.message = LABEL.VALIDATION.COMMON.MESSAGE.NOT_EMPTY;
			this.setState({validation: validation})
			return false;
		} else if(text.trim().length < CONFIG.VALIDATION.REVIEW.MIN_LENGTH) {
			validation.text.error = true;
			validation.text.message = `${LABEL.VALIDATION.REVIEW.MESSAGE.MIN_LENGTH}. Remains ${CONFIG.VALIDATION.REVIEW.MIN_LENGTH - text.trim().length} characters`;
			this.setState({validation: validation})
			return false;
		} else {
			validation.text.error = null;
			validation.text.message = null;
		}

		return true;
	}

	render(){
		const { name, email, text } = this.state.form;
		const { isTyping } = this.props.review;
		
		return(
			<form className="review-form">
				<header>
					<h4>
						Fill in form <span>{ isTyping != null && isTyping > 0 ?  isTyping + ` people typing...` : null }</span>
					</h4>
				</header>
				<content>
					<Input
						type="text"
				        placeholder="Enter your username"
				        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
				        suffix={name ? <Icon type="close-circle" onClick={() => this.handleReset('name')} /> : null}
				        value={name}
				        onChange={(e) => this.handleChange(e, 'name')}
				      />
				      {
				      	(() => {
				      		return this.state.validation.name.message ? 
				      			<div className="error-message">{this.state.validation.name.message}</div>
				      			:
				      			null
				      	})()
				      }
				      <Input
				      	type="email"
				        placeholder="Enter your email"
				        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
				        suffix={email ? <Icon type="close-circle" onClick={() => this.handleReset('email')} /> : null}
				        value={email}
				        onChange={(e) => this.handleChange(e, 'email')}
				      />
				      <TextArea 
				      	rows={4}
				      	value={text}
				      	onChange={(e) => this.handleChange(e, 'text')}
				      />
				      {
				      	(() => {
				      		return this.state.validation.text.message ? 
				      			<div className="error-message">{this.state.validation.text.message}</div>
				      			:
				      			null
				      	})()
				      }
				</content>
				<footer>
					<Button className="btn-reset" onClick={() => this.handleReset()}>Clear</Button>
					<Button type="primary" className="btn-submit" onClick={() => this.handleSubmit()}>Submit</Button>
				</footer>
			</form>
			);
	}
}

export default ReviewForm;