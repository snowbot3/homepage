import React, { Component } from 'react'
import './Icon.css'

class Icon extends Component {
	render() {
		var size = this.props.size || 32
		var chrData = Icon.chars[this.props.chr]
		var style = {
			fontSize: (size * chrData.fsize) + 'px',
			width: size + 'px',
			height: size + 'px',
			lineHeight: (size * 262 / 256) + 'px'
		}
		var style2 = {
			margin: '-' + size + 'px'
		}
		var className = 'Icon'
		if (this.props.className) {
			className += ' ' + this.props.className
		}
		var fx = this.props.fx;
		if (fx && Icon.fxs[fx]) {
			className += ' ' + Icon.fxs[fx]
		}
		return (<div className={className} style={style}>
			<span className="IconInner" style={style2}>{chrData.chr}</span>
		</div>)
	}
}
Icon.chars = {
	arrowCircle: {
		chr: '\u21BA',
		fsize: (275/256)
	},
	trigramHeaven: {
		chr: '\u2630',
		fsize: (227/256)
	},
	sunny: {
		chr: '\u2600',
		fsize: (5/4)
	},
	phone: {
		chr:'\u260E',
		fsize: (227/256)
	},
	recycle: {
		chr: '\u267B',
		fsize: (35/32)
	},
	warning: {
		chr: '\u26A0',
		fsize: (227/256)
	},
	soccer: {
		chr: '\u26BD',
		fsize: (227/256)
	}
}
Icon.fxs = {
	spin: 'IconFxSpin',
	shake: 'IconFxShake'
}

export default Icon

