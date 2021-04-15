import React , { Component } from 'react';
import logo from './components/images/logotipo/logo.png';
import './App.css';
import Header from './components/header';
import SectionOne from './components/sectionone';
import SectionDestaque from './components/sectiondestaque';
import SectionCorona from './components/sectioncorona';
import MaisNoticias from './components/maisnoticias';
import SectionRecomendado from './components/sectionrecomendado';
// import Footer from './components/footer';

class App extends Component {
  render(){
    return (
      <div className="App">
         <Header />
         <SectionOne />
         <SectionDestaque />
         <SectionCorona />
         <MaisNoticias />
         <SectionRecomendado />
          <div className="App-header">
             <img src={logo} className="App-logo2" style={{position: 'absolute',top:'3130px',left:'1000px'}} alt="logo" />        
          </div>
         <div className="container-flex">
                   <div className="zone left">
                     <h3 style={{padding: 'auto',margin:'auto'}}>Temas</h3>
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
                     <h3 className="h3Footer" style={{padding: 'auto',margin:'auto'}}>Corporação</h3>
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
                       <h3 className="h3Footer" style={{padding: 'auto',margin:'auto'}}>Siga-nos nas Redes sociais</h3>
                       <ul style={{listStyle: 'none'}}>
                           <li style={{display: 'inline-block',padding: '2px'}}>Facebook</li>
                           <li style={{display: 'inline-block',padding: '2px'}}>Instagram</li>
                           <li style={{display: 'inline-block',padding: '2px'}}>Twitter</li>
                           <li style={{display: 'inline-block',padding: '2px'}}>Youtube</li>
                           <li style={{display: 'inline-block',padding: '2px'}}>Linkedin</li>
                       </ul>

                   </div>    
   
               </div>
        </div>
    );
  }
}

export default App;
