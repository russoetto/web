import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://miro.medium.com/max/909/1*_iikfMGYF3RH4OZ0yeQYnQ.png" alt="Gabriel Rossetto"/>
        <div>
          <strong>Monika Whitehead</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id metus mi. 
        <br/><br/>
        Vivamus elementum diam congue ante lacinia dapibus. Donec aliquam, tellus bibendum bibendum sodales, nisl arcu eleifend neque, ac porta metus nulla quis enim. Cras tempus eros quis mauris luctus scelerisque vitae a orci. Cras molestie ligula sed ex finibus rhoncus.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;