import React, {Component} from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//actions
import * as bankActions from '../../actions/bankActions'

//component
import BankItem from './../../components/bank/bankItem';

//utils
import { getBankList } from '../../utils/api/bank';

//Library
import { Card, Row } from 'antd';


class BankList extends Component {

	constructor(props){
		super(props);

		this.data = [];
	}

	componentWillMount(){
		this.setBankList();
		this.data = this.props.bank.list;
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.bank.list !== this.data){
			this.data = nextProps.bank.list;
		}
	}

	setBankList(){
		this.props.bankActions.setBankList();
	}

	render(){
		return(
			<div className={"bank-list"}>
				<header>
					<h3>Bank List</h3>
				</header>
				<content>
					<Row>
					{
						(() => {
							if(this.data){
								return this.data.map((bank, i ) => {
									return <BankItem key={i} index={`bank-${i}`} {...bank} bankActions={this.props.bankActions}/>
								})
							} else {
								return (
									<Card loading title="Bank Name" style={{ width: '34%' }}>
										Whatever content
									</Card>)
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
    	bank: state.bank
    }
}

function mapDispatchToProps(dispatch) {
    return {
        bankActions : bindActionCreators(bankActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BankList);