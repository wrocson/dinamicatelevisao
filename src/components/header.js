import React, { Component } from 'react'
import logo from './images/logotipo/logo.png';
import '../App.css';

const Header = () => {
	return(
		 <header className="App-header">
		 	<div className="logo-container">
			 	<img src={logo} className="App-logo" alt="logo" />				
		 	</div>
			 <nav className="navigation">
			    <ul className="ulStyle">
			      <li className="liStyle">Moçambique</li>
			      <li className="liStyle">Mundo</li>
			      <li className="liStyle">Cultura</li>
			      <li className="liStyle">Desporto</li>
			      <li className="liStyle">Economia</li>
			      <li className="liStyle">Saúde</li>
			      <li className="liStyle">Programa</li>
			      <li className="liStyle">Video</li>
			    </ul>
			  </nav>       
	  	</header>
	)
}
// const Header = () => {
// 	return(
// 		 <header className="App-header">
// 			 <img src={logo} className="App-logo" alt="logo" />
// 			 <nav />       
// 	  	</header>
// 	)
// }

export default Header;