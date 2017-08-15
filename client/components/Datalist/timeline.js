import React, {Component} from 'react';

import {Row, Col, Timeline} from 'antd';

class List extends Component {
	constructor(props){
		super(props);
	}

	render(){
		let timelineItems = this.props.items.map((item, i) => {
			return(
				<Timeline.Item className="timeline-item" key={i} >
					<Row gutter={16}>
						<Col
							xs={{span: 22}} 
							sm={{span: 22}}>
							<span className="timeline-item__title">{item.title}</span>
							&nbsp;
							<span className="timeline-item__text">{item.text}</span>	
						</Col>
						<Col 
							xs={{span: 2}}
							sm={{span: 2}}>
							<span className="timeline-item__delete">&times;</span>
						</Col>
					</Row>
				</Timeline.Item>
				)
		});
		return(
			<Timeline className="timeline">
				{timelineItems}
			</Timeline>
			);
	}
}

export default List;