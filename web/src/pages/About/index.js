import React, { useState, useEffect } from 'react';
import { FaChevronRight  } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import github_img from '../../assets/github_img.png';

import api from '../../services/api';

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
    const [ devs, setDevs ] = useState([]);

    const [ github_username, setGithub_username ] = useState('');
    const [ techs, setTechs ] = useState('');

    useEffect(() => {
        async function loadDevs() {
            try {
                const response = await api.get('/');

                setDevs(response.data);
                console.log(response.data);
            } catch (err) {
                return alert('Error in load devs');
            }
        }
        loadDevs();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await api.post('/users', {
                github_username,
                techs,
            });

            setDevs(...devs, response.data);
        } catch (err) {
            return alert('Error in create dev, try another.');
        }
    }

    return (
        <DivContainer>
            <Header>
                <h1>SEARCH GITHUB IO</h1>
            </Header>
                <Section>
                    <FormDev onSubmit={handleSubmit}>
                        <h1>CADASTRAR DEV</h1>
                        <input
                            
                            value={github_username}
                            onChange={e => setGithub_username(e.target.value)} 
                            placeholder="Usuário do Github"/>
                        <input
                            value={techs}
                            onChange={e => setTechs(e.target.value)} 
                            placeholder="Tecnologias"/>
                        <button type="submit">CADASTRAR</button>
                    </FormDev>
                        
                    <ListDevs>
                        <h1>Desenvolvedores</h1>
                        <li>
                            <img src={github_img} alt="Github Avatar"/>
                            <DivInfo>
                                <h3>Ricardo Santos</h3>
                                <p>Desenvolvedor Web | Criando projetos com ReactJS e NodeJS e sempre estudando para consumir ainda mais conhecimentos.</p>
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