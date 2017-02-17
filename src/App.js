import React from 'react';


class App extends React.Component {
	render() {
		return (
			<Parent>
				<div className="childA"></div>
				<div className="childB"></div>
			</Parent>
		)
	}
}


class Parent extends React.Component {
	render() {
		// console.log(this.props.children
		//let items = React.Children
		//.forEach(this.props.children,
		//	child => console.log(child.props.className))

		// will throw an error if there are two classes 
		// as it stands, it will throw an error
		let items = React.Children.only(this.props.children)

		console.log(items)
		return null
	}
}

export default App