import React from 'react';

export default class DisplayMessages extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			input: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.submitMessage = this.submitMessage.bind(this);
	}

	handleChange(e) {
		this.setState({
			input: e.target.value,
		});
	}

	submitMessage() {
		this.setState({
			input: '',
		});

		return this.props.submitNewMessage(this.state.input);
	}

	render() {
		const list = this.props.messages.map((item, index) => <li key={index}>{item}</li>);

		return (
			<div>
				<h2>Type in a new Message:</h2>
				<input value={this.state.input} onChange={this.handleChange} />
				<button onClick={this.submitMessage}>Submit</button>
				<ul>{list}</ul>
			</div>
		);
	}
}
