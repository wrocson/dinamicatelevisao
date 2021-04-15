import React from 'react';

const Nav = {
	width: '100%',
	height: '65px',
	borderBottom: '2px solid #f1f1f1',
	padding: '0 20px',
	display: 'flex',
	justifyContent: 'space-between'
};
const Logo = {
		padding: '15px 0'
};
const ulStyle= {
		listStyle: 'none',
		display: 'flex',
		justifyContent: 'space-around',
		flexFlow: 'row nowrap'
};

const liStyle = {
		padding: '18px 10px'
};

const Navbar = () => {
	return (
		<div>
			<nav  style={Nav}>
				<div className="logo" style={Logo}>
					Nav bar
				</div>
				<ul className="ulStyle" style={ulStyle}>
			      <li className="liStyle" style="liStyle">Moçambique</li>
			      <li className="liStyle" style="liStyle">Mundo</li>
			      <li className="liStyle" style="liStyle">Cultura</li>
			      <li className="liStyle" style="liStyle">Desporto</li>
			      <li className="liStyle" style="liStyle">Economia</li>
			      <li className="liStyle" style="liStyle">Saúde</li>
			      <li className="liStyle" style="liStyle">Programa</li>
			      <li className="liStyle" style="liStyle">Video</li>
			    </ul>
			</nav>    				
		</div>
	)
}

export default Navbar;