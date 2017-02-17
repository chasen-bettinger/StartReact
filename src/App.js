import React from 'react';

class App extends React.Component {

	constructor() {
		super(); // going to give us the context of the parent
		this.state = {
			txt: 'this is the state txt'
		}

	}


	update (e) { // custom method
		this.setState({txt: e.target.value})
	}


  render() {
    return (
    	<div>	
    		<h1>{this.state.txt}</h1>
    		<Widget update={this.update.bind(this)} />
    	</div>
    )
  }
}

// Stateless widget
const Widget = (props) =>
<input type="text" onChange={props.update}/>
// Creating new keys
App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
}

// Creating default keys
App.defaultProps = {
	txt: "this is the default txt"
}

//const App = () => <h1>Hello stateless</h1>
export default App 