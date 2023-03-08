import style from './App.module.scss';

//``npm i react-scripts@latest`` reinstala a versão atual do create-react-app

import React from 'react';

import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import Cronometro from '../components/Cronometro';



function App() {
  return (
    <div className={style.AppStyle}>
     <Formulario />
     <Cronometro />
     <Lista />
    </div>
  );
}

export default App;
