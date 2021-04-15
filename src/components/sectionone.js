import React, { Component } from 'react'
import '../App.css';
import img1 from './images/eventos/img10.png'
import img2 from './images/eventos/img10.png'
import img3 from './images/eventos/img11.png'
import img4 from './images/eventos/img12.png'
import img5 from './images/eventos/img13copy.png'
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

class SectionOne extends Component {
	render(){
		return( 
			<div className="container">
				<img className="one" src={img1} alt="eventos"/>
				<img  src={img2} alt="eventos"/>
				<img  src={img3} alt="eventos"/>
				<img  src={img4} alt="eventos"/>
				<img  src={img5} alt="eventos"/>
			</div>
		)
	}
}

export default SectionOne;