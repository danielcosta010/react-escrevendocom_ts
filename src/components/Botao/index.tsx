import style from './Botao.module.scss'
import React from 'react';

interface props {
  children: string,
  type?: 'button' | 'submit' | 'reset' | undefined
}

class Botao extends React.Component<props> {
  render() {
    const { type= 'button' } = this.props
    return (
      <button type={type} className={style.botao}>
        {this.props.children}
      </button>
    )
  }
}

export default Botao;