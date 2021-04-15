import React, { Component } from 'react'
import '../App.css';
import img4 from './images/eventos/img4.png'
import img5 from './images/eventos/img5.png'
import img6 from './images/eventos/img6.png'
import img8 from './images/eventos/img8.png'
import img9 from './images/eventos/img9.png'


class MaisNoticias extends Component {
	render(){
		return(
			<div style={{padding: '50px 0px'}}>
				<h3 style={{padding: '20px 0px'}}>•Mais Noticias</h3>
				<div className="container">
					<img className="one" src={img4} alt="eventos"/>
					<img className="one2" src={img5} alt="eventos" />
					<img  src={img6} alt="eventos"/>
					<img  src={img8} alt="eventos"/>
					<img  src={img9} alt="eventos"/>
				</div>
			</div>
		)
	}
}

export default MaisNoticias;