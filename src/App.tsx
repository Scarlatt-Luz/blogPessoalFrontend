import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import Footer from './components/static/footer/Footer';
import Navbar from './components/static/navbar/Navbar';
import ListaTema from './components/temas/listaTema/ListaTema';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div>
          <Route exact path='/'>
            <Login />
          </Route>
          
          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/cadastro-usuario'>
            <CadastroUsuario />
            </Route>

            <Route path='/temas'>
            <ListaTema />
            </Route>

            <Route path='/posts'>
            <ListaPostagem />
            </Route>
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
