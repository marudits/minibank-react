import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as bankActions from '../actions/bankActions';
import * as reviewActions from '../actions/reviewActions';
import * as propertyActions from '../actions/propertyActions';

import Main from './app/main';

function mapStateToProps(state){
	return {
		banks: state.banks,
		reviews: state.reviews,
		properties: state.properties
	}
}

function mapDispatchToProps(dispatch){
	return {
		bankActions: bindActionCreators(bankActions, dispatch),
		reviewActions: bindActionCreators(reviewActions, dispatch),
		propertyActions: bindActionCreators(propertyActions, dispatch)
	}
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;