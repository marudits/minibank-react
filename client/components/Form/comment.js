import React, {Component} from 'react';

//component
import {Button, Col, Form, Icon, Input, Row} from 'antd';

class FormComment extends Component {
	constructor(props){
		super(props);

	}

	handleSubmit(e){
		e.preventDefault();
		console.log('handleSubmit');
		
		let {form} = this.props;
		console.log('author: ', form.getFieldValue('author'))
		console.log('comment: ', form.getFieldValue('comment'))

	}

	render(){
		const {getFieldDecorator} = this.props.form;
		const FormItem = Form.Item,
			InputTextArea = Input.TextArea;

		return(
			<Form onSubmit={this.handleSubmit.bind(this)} ref="formComment">
							<FormItem>
								{
									getFieldDecorator('author', {})(
										<Input prefix={<Icon type="user" />} placeholder="Author"/>
										)
								
								}
							</FormItem>
							<FormItem>
								{
									getFieldDecorator('comment', {})(
										<InputTextArea 
											placeholder="Comment" 
											autosize={{minRows: 2, maxRows: 4}} 
											/>
									)
								
								}
							</FormItem>
							
							
							
						</Form>
			);
	}

}

const WrappedForm = Form.create()(FormComment)

export default WrappedForm;