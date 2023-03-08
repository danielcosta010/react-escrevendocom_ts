import style from './Lista.module.scss';
import React from "react";
import Item from './Item';

function Lista() {
  const tarefas = [{
    tarefa: 'React',
    tempo: '02:00:00'
  }, 
  {
    tarefa: 'JavaScript',
    tempo: '01:00:00'
  },
  {
    tarefa: 'Typescript',
    tempo: '02:00:00'
  },
  {
    tarefa: 'Python',
    tempo: '01:30:00'
  }, {
    tarefa: 'C#',
    tempo: '03:00:00'
  }]  
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item 
            key={index} 
            {...item}
          />
        ))}
        
      </ul>
    </aside>
  );
}

export default Lista;