import { connect } from 'react-redux';

import './App.css';
import DisplayMessages from './DisplayMessages';
import { mapStateToProps, mapDispatchToProps } from './store';

function App(props) {
	return (
		<div className="App">
			<header className="App-header">
				<ConnectedComponent />
			</header>
		</div>
	);
}

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(DisplayMessages);

export default App;
