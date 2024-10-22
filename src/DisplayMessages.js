import React from 'react';

export default class DisplayMessages extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			input: '',
			messages: [],
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
			messages: [...this.state.messages, this.state.input],
		});
	}

	// submitMessage() {
	// 	this.setState((state) => {
	// 		return {
	// 			input: '',
	// 			messages: state.messages.concat(state.input),
	// 		};
	// 	});
	// }

	render() {
		const list = this.state.messages.map((item, index) => <li key={index}>{item}</li>);

		return (
			<div>
				<h2>Type in a new Message:</h2>
				<input value={this.state.input} onChange={this.handleChange} />
				<button onClick={this.submitMessage}>Submit</button>
				<ul>{list}</ul>
			</div>
		);
	}

	// render() {
	// 	return (
	// 		<div>
	// 			<h2>Type in a new Message:</h2>
	// 			<input value={this.state.input} onChange={this.handleChange} />
	// 			<br />
	// 			<button onClick={this.submitMessage}>Submit</button>
	// 			<ul>
	// 				{this.state.messages.map((message, idx) => {
	// 					return <li key={idx}>{message}</li>;
	// 				})}
	// 			</ul>
	// 		</div>
	// 	);
	// }
}
