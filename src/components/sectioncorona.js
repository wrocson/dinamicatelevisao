import React, { Component } from 'react'
import '../App.css';
import img14 from './images/eventos/img10.png'
import img15 from './images/eventos/img10.png'
import img16 from './images/eventos/img10.png'
import img18 from './images/eventos/img18.png'
import img19 from './images/eventos/img19.png'
import img20 from './images/eventos/img20.png'
import img21 from './images/eventos/img21.png'



class SectionCorona extends Component {
	render(){
		return(
			<div style={{padding: '50px 0px'}}>
				<h3 style={{padding: '20px 0px'}}>•Corona Virus</h3>
				<div className="container">
					<img  src={img19} alt="eventos"/>
					<img  src={img20} alt="eventos"/>
					<img  src={img21} alt="eventos"/>
					<img  src={img18} alt="eventos" />
				</div>
			</div>
		)
	}
}

export default SectionCorona ;