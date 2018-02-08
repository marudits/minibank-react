import React, { Component } from 'react';
import { render } from 'react-dom';

class PropertyList extends Component {
	render(){
		return(
			<div className={"property-list"}>
				<header>
					<h3>Property List</h3>
				</header>
				<content>
					<ul>
						<li>Property A</li>
						<li>Property B</li>
						<li>Property C</li>
					</ul>
				</content>
				<footer></footer>
			</div>
			);
	}
}

export default PropertyList;