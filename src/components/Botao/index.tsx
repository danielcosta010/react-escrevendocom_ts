import style from './Botao.module.scss'
import React from 'react';

interface props {
  
}

class Botao extends React.Component<{
  children: string,
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
}> {
  render() {
    const { type= 'button', onClick } = this.props
    return (
      <button onClick={onClick} type={type} className={style.botao}>
        {this.props.children}
      </button>
    )
  }
}

export default Botao;