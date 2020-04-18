import React from 'react';
import { FaChevronRight  } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import github_img from '../../assets/github_img.png';

import {
    DivContainer,
    Header,
    Section,
    FormDev,
    ListDevs,
    DivInfo,
    Techs,
    Github,
    DivGroupInfo,
    Footer
} from './styles';

export default function About() {
    return (
        <DivContainer>
            <Header>
                <h1>SEARCH GITHUB IO</h1>
            </Header>
                <Section>
                    <FormDev>
                        <h1>CADASTRAR DEV</h1>
                        <input placeholder="Usuário do Github"/>
                        <input placeholder="Tecnologias"/>
                        <button type="submit">CADASTRAR</button>
                    </FormDev>
                        
                    <ListDevs>
                        <h1>Desenvolvedores</h1>
                        <li>
                            <img src={github_img} alt="Github Avatar"/>
                            <DivInfo>
                                <h3>Ricardo Santos</h3>
                                <p>Desenvolvedor Web |  Criando projetos com ReactJS e NodeJS e sempre estudando para consumir ainda mais conhecimentos.</p>
                                <p>Tecnologias: <br /><Techs>ReactJS, Node.js</Techs></p>
                                <DivGroupInfo>
                                    <p>Github: <Github>RicardoWorf</Github></p>
                                    <Link to="/repos">REPOSITÓRIOS <FaChevronRight size={16} color="#ED464B"/></Link>
                                </DivGroupInfo>
                            </DivInfo>
                        </li>
                    </ListDevs>
                </Section>
            <Footer>
                <h1>CREATED BY: <span>RicardoWorf</span></h1>
            </Footer>
        </DivContainer>
    );
}