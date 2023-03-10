import style from './Cronometro.module.scss'

import Botao from "../Botao";
import Relogio from "./Relogio";
import { tempoParaSegundos } from '../../common/utils/time';
import { ITarefa } from '../../Types/Tarefa';
import { useEffect, useState } from 'react';


interface Props {
  selecionado: ITarefa | undefined
}

function Cronometro({ selecionado }: Props) {
  
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
      }
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
    }, 1000);
  }

  return (  
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o tempo</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo}/>  
        
      </div>
      <Botao onClick={() => regressiva(tempo)}>
        Começar!
      </Botao>
    </div>
  );
}

export default Cronometro;