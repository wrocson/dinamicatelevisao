import React, { Component } from 'react'
import '../App.css';
import img4 from './images/eventos/img4.png'
import img5 from './images/eventos/img5.png'
import img6 from './images/eventos/img6.png'
import img8 from './images/eventos/img8.png'
import img9 from './images/eventos/img9.png'
import imgx from './images/eventos/img14.png'
import imgy from './images/eventos/img15.png'
import imgz from './images/eventos/img16.png'


const imgStyle = {
	width : '100%',
	height: 'auto'
}

const CardStyle ={
	backgroundColor: 'rgba(0,255,200,.3)',
	width:'300px'
}
const Text = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
}

class SectionRecomendado extends Component {
	render(){
		return(
			<div style={{padding: '50px 0px'}}>
				<h3 style={{padding: '20px 0px'}}>•Recomendado</h3>
				<div className="container">
					
					<div className="card-recomendado" style={CardStyle}>
						<img className="three" src={img4} style={imgStyle} alt="eventos Recomendado"/>
						<div className="flex-text" style={Text}>
							<p>Reportagem  no joao Mateus </p>
						</div>
					</div>

					<div className="card-recomendado" style={CardStyle}>
						<img className="three" src={img5} style={imgStyle} alt="eventos Recomendado" />
						<div className="flex-text" style={Text}>
							<p>Reportagem  na Escola Secundaria da Matola </p>
						</div>
					</div>

					<div className="card-recomendado" style={CardStyle}>	
						<img className="three" src={img6} style={imgStyle} alt="eventos Recomendado"/>
						<div className="flex-text" style={Text}>
							<p>Reportagem  ao governador Parruque </p>
						</div>
					</div>
					
					<div className="card-recomendado" style={CardStyle}>	
						<img className="three" src={img8} style={imgStyle} alt="eventos Recomendado"/>
						<div className="flex-text" style={Text}>
							<p>Reportagem  num estabelecimento comercial </p>
						</div>
					</div>

					<div className="card-recomendado" style={CardStyle}>
						<img className="three" src={imgx} style={imgStyle} alt="eventos Recomendado"/>
						<div className="flex-text" style={Text}>
							<p>Greve em Mozambque </p>
						</div>
					</div>

					<div className="card-recomendado" style={CardStyle}>
						<img className="three" src={imgx} style={imgStyle} alt="eventos Recomendado"/>
						<div className="flex-text" style={Text}>
							<p>Greve em Mozambque </p>
						</div>
					</div>
					<div className="card-recomendado" style={CardStyle}>
						<img className="three" src={imgy} style={imgStyle} alt="eventos Recomendado"/>
						<div className="flex-text" style={Text}>
							<p>Greve de artistas </p>
						</div>
					</div>	
					
					<div className="card-recomendado" style={CardStyle}>
						<img className="three" src={imgz} style={imgStyle} alt="eventos Recomendado"/>
						<div className="flex-text" style={Text}>
							<p>Igreja Sao Gabriel </p>
						</div>
					</div>						

				</div>
			</div>
		)
	}
}

export default SectionRecomendado;