import React, { Component } from 'react';
import { render } from 'react-dom';

//library
import { Row, Col, Spin, Icon } from 'antd';

//style
import "./propertyItem.styl"

class PropertyItem extends Component {
	constructor(props){
		super(props);

		this.data = this.props.data
		this.state = {
			isLoading: false
		}
	}

	componentWillMount(){
		if(!this.data){
			this.setState({isLoading: true});
		}
	}

	render(){
		return(
			<Col lg={{span: 12}} md={{span: 12}} s={{span: 12}} xs={{span: 24}} className="property-item">
				<Spin
					spinning={this.state.isLoading}
				>
					{
						(() => {
							if(this.data){
								return(
									<section>
										<Row gutter={16}>
											<Col className="property-item__img" span={10}>
												<div>
													<img src={this.data.imgSrc} alt={this.data.title}/>	
												</div>
											</Col>
											<Col className="property-item__info" span={14}>
												<header>
													<h4>{this.data.title}</h4>
													<p>
														<Icon type="environment"/>
														&nbsp;
														{this.data.location}
													</p>

													<span>
														{this.data.price}
													</span>
												</header>
												<content>
													<summary>
														{this.data.summary}
													</summary>
													<a href="#">More details</a>
												</content>
											</Col>
										</Row>
										<footer>
											
										</footer>
									</section>		
									);
							} else {
								return null
							}
						})()
					}
				</Spin>
			</Col>
			)
	}
}

export default PropertyItem;