import style from './Cronometro.module.scss'

import Botao from "../Botao";
import Relogio from "./Relogio";

function Cronometro() {
  return (  
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o tempo</p>
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Botao type='button'>
        Começar!
      </Botao>
    </div>
  );
}

export default Cronometro;