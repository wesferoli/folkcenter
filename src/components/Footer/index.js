import React from 'react';
import { FooterBase } from './styles';
import Github from '../../assets/img/Github-logo.png';
import Linkedin from '../../assets/img/Linkedin-logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/wesferoli">
        <img src={Github} alt="Logo Github" />
      </a>
      <a href="https://www.linkedin.com/in/wesferoli/">
        <img src={Linkedin} alt="Logo Linkedin" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
