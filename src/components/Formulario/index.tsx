import style from './Formulario.module.scss';

import React from "react";
import Botao from "../Botao";

class Formulario extends React.Component {
  state = {
    tarefa: '',
    tempo: '00:00'
  }
  
  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    console.log('state', this.state);
    
  }

  render() { 
    return (  
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input 
            type="text" 
            name="tarefa"
            id="tarefa" 
            value={this.state.tarefa}
            onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">
            Tempo
          </label>
          <input 
            type="time"
            step='1'
            id="tempo"
            value={this.state.tempo}
            onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
            min='00:00:00'
            max='01:00:00' 
            name="tempo" 
            required
          />
        </div>
        <Botao type='submit'>
          Adicionar  
        </Botao>
      </form>
    );
  }
}
 
export default Formulario;