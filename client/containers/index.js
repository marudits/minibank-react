import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as commentActions from '../actions/commentActions';
import * as loanActions from '../actions/loanActions';
import * as postActions from '../actions/postActions';

import Main from './App/main';

function mapStateToProps(state){
	return{
		posts: state.posts,
		comments: state.comments,
		loans: state.loans
	}
}

function mapDispatchToProps(dispatch){
	return {
		commentActions: bindActionCreators(commentActions, dispatch),
		loanActions: bindActionCreators(loanActions, dispatch),
		postActions: bindActionCreators(postActions, dispatch)
	}
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;