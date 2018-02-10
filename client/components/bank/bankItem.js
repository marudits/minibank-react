import React, { Component } from 'react';
import { render } from 'react-dom';

//Library
import { Card, Icon, Avatar, Col, Spin } from 'antd';
const { Meta } = Card;


//Helper
import { numToDays } from '../../utils/helpers/stringManipulation';
import { convertCoordsToImage } from '../../utils/helpers/gmaps';

//Style
import "./bankItem.styl"

class BankItem extends Component {
	constructor(props){
		super(props);

		this.actionList = []
		this.state = {
			isLoading: false
		}
	}

	componentWillMount(){
		this.setActionList();
	}

	componentWillReceiveProps(nextProps){
		if(this.props !== nextProps){
			this.props = nextProps;
			this.setActionList();

			this.setState({isLoading: false})
		}
	}

	onClick(actionType, data = null){
		switch(actionType){
			case "detail":
				break;
			case "favourite":
				this.setState({isLoading: true})
				this.props.bankActions.favouriteBank(this.props.id);
				break;
			default:
				console.log('actionType: ', actionType, ' | data: ', data);
				break;
		}
	}

	setActionList(){
		let actionList = [
			<Icon 
				type="heart-o"  
				onClick={() => this.onClick("favourite")}
				className="bank-action"
			>
				<span className="bank-action__info">
					{this.props.favourites}
				</span>
			</Icon>, 
			<Icon type="edit" className="bank-action" />,
			<Icon type="phone" className="bank-action" />, 
			<Icon type="environment-o" className="bank-action" />
		];

		this.actionList = actionList;
	}


	render(){
		return(
			<Col lg={{span: 6}} md={{span: 12}} s={{span: 12}} xs={{span: 24}} className="bank-item">
				<Spin 
					spinning={this.state.isLoading}
					tip="Loading..."
					size="large"
					>
					<Card
						cover={<img alt={this.props.name} src={convertCoordsToImage(this.props.location.lat, this.props.location.lng)}/>}
						actions={this.actionList}
						className="bank-item__card"
					>
	    				<Meta
	      					avatar={
	      						<div>
	      							<Icon type="star" style={{fontSize: "2.2em"}}/>
	      							<br />
	      							<span style={{fontSize: "1.2em", fontWeight: "bold"}}>
	      								{this.props.rating}
	      							</span>	
	      						</div>
	      						
	      					}
	      					title={this.props.name}
	      					description={this.props.address.length > 60 ? `${this.props.address.slice(0, 60)}...` :  this.props.address }
	      					style={{borderBottom: "1px solid #f0f0f0", height: "100px", fontSize: "1em"}}
	    				/>

	    				<content>
	    					<section style={{marginTop: "1em"}}>
	    						<header>
	    							<h4>
	    								<Icon type="calendar"/>&nbsp;Working Days
	    							</h4>
	    						</header>
	    						<content>
	    							<p>{numToDays(this.props.officeDays)}</p>
	    						</content>
	    					</section>
	    					<section>
	    						<header>
	    							<h4>
	    								<Icon type="clock-circle-o"/>&nbsp;Working Hours
	    							</h4>
	    						</header>
	    						<content>
	    							<p>{this.props.officeHours.join(' - ')}</p>
	    						</content>
	    					</section>
	    				</content>
	  				</Card>
				</Spin>
			</Col>
		);
	}
}

export default BankItem;