import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//actions
import * as propertyActions from "../../actions/propertyActions"

//components
import PropertyItem from "../../components/property/propertyItem"

//library
import { Row } from 'antd';

class PropertyList extends Component {
	constructor(props){
		super(props);

		this.state =  {
			html: null
		}

		this.data = null		
	}

	componentWillMount(){
		this.setPropertyList();
		this.data = this.props.property.list;
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.property.list && this.data !== nextProps.property.list){
			this.data = nextProps.property.list;
		}
	}

	setPropertyList(){
		this.props.propertyActions.setPropertyList()
	}

	render(){
		return(
			<div className={"property-list"}>
				<header>
					<h3>Property List</h3>
				</header>
				
				<content>
					<Row gutter={16}>
						{
							(() => {
								switch(this.props.property.state){
									case 'LOADING':
										return `Loading...`;
									case 'LOADED':
										if(this.data && this.data.length > 0){
											return this.data.map((property, i) => {
												return <PropertyItem key={i} index={`property-${i}`} data={property} propertyActions={this.props.propertyActions}/>
											})
										} else {
											return `There is no data`
										}
										
									case 'ERROR':
										return `${this.props.property.message}`
									default:
										return null
								}
							})()
						}
					</Row>
				</content>
				<footer></footer>
			</div>
			);
	}
}

function mapStateToProps (state) {
    return {
    	property: state.property
    }
}

function mapDispatchToProps(dispatch) {
    return {
        propertyActions : bindActionCreators(propertyActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyList);