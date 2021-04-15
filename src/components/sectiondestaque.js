import React, { Component } from 'react'
import '../App.css';
import img6 from './images/eventos/img14.png'
import img7 from './images/eventos/img15.png'
import img8 from './images/eventos/img10.png'
import img9 from './images/eventos/img10.png'
import img10 from './images/eventos/img10.png'
import img11 from './images/eventos/img10.png'
import img12 from './images/eventos/img10.png'
import img13 from './images/eventos/img10.png'
import img14 from './images/eventos/img10.png'
import img15 from './images/eventos/img10.png'
import img16 from './images/eventos/img10.png'

class destaque extends Component {
	render(){
		return(
			<div style={{padding: '50px 0px'}}>
				<h3 style={{padding: '20px 0px'}}>•Em destaque</h3>
				<div className="container">
					<img  src={img6} alt="eventos"/>
					<img  src={img7} alt="eventos"/>
					<img  src={img8} alt="eventos"/>
					<img  src={img9} alt="eventos" />
				</div>
			</div>
		)
	}
}

export default destaque ;