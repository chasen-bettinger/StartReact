import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

	constructor() {
		super(); // going to give us the context of the parent
		this.state = {
			a: ' '
		}

	}


	update () { // custom method
		this.setState({
			// gets the value for the specific node 'a'
		a: this.a.refs.input.value,

		// gets the value for the specific node 'b'
		b: this.refs.b.value
		})
		
	}


  render() {
    return (
    	<div>	
    		<Input 
    		ref={component => this.a = component}
    		update={this.update.bind(this)}
    		/>
    		{this.state.a}

    		<hr />
    		<input
    		ref="b"
    		type="text"
    		onChange={this.update.bind(this)}
    		/>
    		{this.state.b}
    	</div>
    )
  }
}


class Input extends React.Component {
	render() {
		//Wrapping in a div now references the FindDOMNode call
		return <div><input  ref="input" type="text" onChange={this.props.update}/></div>
	}
}


export default App 