import React, { Component } from 'react';
import { render } from 'react-dom';

class ReviewList extends Component {
	render(){
		return(
			<div className={"review-list"}>
				<header>
					<h3>Review List</h3>
				</header>
				<content>
					<ul>
						<li>
							Review X
						</li>
						<li>
							Review Y
						</li>
						<li>
							Review Z
						</li>
					</ul>
				</content>
				<footer></footer>
			</div>
			);
	}
}

export default ReviewList;