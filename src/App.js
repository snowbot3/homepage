import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Menu from './Menu'
import Icon from './Icon'

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-NavBar">
					<Menu>
						<div>Something</div>
						<div>Else</div>
					</Menu>
					<span className="NavBarSpace"></span>
					<span className="NavBarTray">
						<Icon chr="warning" size={36} />
						<IconFxHover chr="sunny" size={36} fx="spin" />
						<IconFxHover chr="phone" size={36} fx="shake" />
						<Icon chr="arrowCircle" size={36} fx="spin" />
					</span>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
			</div>
		)
	}
}

class IconFxHover extends Component {
	constructor(props) {
		super(props)
		this.state = {hover:false}
		this.handleMouseEnter = this.handleMouseEnter.bind(this)
		this.handleMouseLeave = this.handleMouseLeave.bind(this)
	}
	render() {
		return (<span className="IconFxHover"
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}>
			<Icon chr={this.props.chr}
				size={this.props.size}
				fx={(this.state.hover?this.props.fx:false)} />
		</span>)
	}
	handleMouseEnter(){
		this.setState({hover:true})
	}
	handleMouseLeave(){
		this.setState({hover:false})
	}
}

export default App
