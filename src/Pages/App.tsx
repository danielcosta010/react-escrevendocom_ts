import style from './App.module.scss';

//``npm i react-scripts@latest`` reinstala a versão atual do create-react-app

import React, { useState } from 'react';

import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import Cronometro from '../components/Cronometro';
import { ITarefa } from '../Types/Tarefa';



function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]); 
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  function finalizarTarefa() {
    if(selecionado) {
      setTarefas(tarefasAnteriores =>
      tarefasAnteriores.map(tarefa => {
          if(tarefa.id === selecionado.id) {
              return {
                  ...tarefa,
                  selecionado: false,
                  completado: true
              }
          }
          return tarefa;
      }))
    } 
  }

  return (
    <div className={style.AppStyle}>
     <Formulario setTarefas={setTarefas}/>
     <Cronometro 
      selecionado={selecionado}
      finalizarTarefa={finalizarTarefa}
    />
     <Lista 
      tarefas={tarefas}
      selecionaTarefa={selecionaTarefa}
    />
    </div>
  );
}

export default App;
