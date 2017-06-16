import React, { Component } from 'react'
import Icon from './Icon'
import './Menu.css'

function fixMethod(that,fnName){
	that[fnName] = that[fnName].bind(that)
}
function fixMethods(that,fns) {
	fns.forEach(function(fnName){
		fixMethod(that,fnName);
	})
}

class Menu extends Component {
	constructor(props){
		super(props)
		this.state = {show:false}
		fixMethods(this,['toggleMenu','hideMenu'])
	}
	render(){
		return (<div className="MenuOuter">
			<span className="MenuButton" onClick={this.toggleMenu} tabIndex="0" onBlur={this.hideMenu}>
				<Icon className="" chr="trigramHeaven" size={36}/>
			</span>
			<div className="Menu" style={{display:(this.state.show?'block':'none')}}>
				{this.props.children}
			</div>
		</div>)
	}
	toggleMenu(){
		this.setState({show:!this.state.show})
	}
	hideMenu(){
		this.setState({show:false})
	}
}

export default Menu

