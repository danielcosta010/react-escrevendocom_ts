import style from './Botao.module.scss'
import React from 'react';

interface props {
  children: string
}


class Botao extends React.Component<props> {
  render() {
    return (
      <button className={style.botao}>
        {this.props.children}
      </button>
    )
  }
}

export default Botao;