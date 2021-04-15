import React, { Component } from 'react'
import '../App.css';
import logo from './images/logotipo/logo.png';


class Footer extends Component {
	render(){
		return(
			<div>
				<div className="container-flex">
	              <div className="zone left">
	                <h3>Temas</h3>
	                <ul style={{listStyle: 'none'}}>
	                  <li>Nacionais</li>
	                  <li>África</li>
	                  <li>Nacionais</li>
	                  <li>Internacional</li>
	                  <li>Economia</li>
	                  <li>Entretenimento</li>
	                  <li>Politica</li>
	                  <li>Cultura</li>
	                  <li>Desporto</li>
	                  <li>Saude</li>
	                  <li>Videos</li>                                                                                                                
	                </ul>
	              </div>
	              
	              <div className="zone center">
	                <h3>Corporação</h3>
	                <ul style={{listStyle: 'none'}}>
	                  <li>Sobre a DTV</li>
	                  <li>Termos e Condições</li>
	                  <li>Políticas de cookies</li>
	                  <li>Conacto</li>
	                  <li>Publicidade</li>
	                  <li>Carreira</li>                                                                        
	                </ul>
	              </div>         
	              
	              <div className="zone right" style={{listStyle: 'none'}}>
	              	<h3>Siga-nos nas Redes sociais</h3>
	              	<ul style={{listStyle: 'none'}}>
	              		<li style={{display: 'inline-block',padding: '10px'}}>Facebook</li>
	              		<li style={{display: 'inline-block',padding: '10px'}}>Instagram</li>
	              		<li style={{display: 'inline-block',padding: '10px'}}>Twitter</li>
	              		<li style={{display: 'inline-block',padding: '10px'}}>Youtube</li>
	              		<li style={{display: 'inline-block',padding: '10px'}}>Linkedin</li>
	              	</ul>
                    <div >
                      <img src={logo} className="App-logo" style={{position: 'absolute',top:'500px',left:'auto'}} alt="logo" />        
                    </div>
	              </div>    

	          </div>	
		</div>
	          
		)
	}
}

export default Footer; 