import React, { useState, useEffect } from 'react';
import { FaChevronRight, FaTrash  } from 'react-icons/fa';

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
            } catch (err) {
                return alert('Error in load devs');
            }
        }
        loadDevs();
    }, [devs]);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await api.post('/users', {
                github_username,
                techs,
            });

            setDevs([...devs, response.data]);
            
            setGithub_username('');
            setTechs('');
        } catch (err) {
            return alert('Error in create dev, try another.');
        }
    }

    async function handleDeleteDev(id) {
        try {
            await api.delete(`/users/${id}`);

            setDevs(devs.filter(dev => dev._id !== id));

            alert('Dev excluido com sucesso.');
        } catch (err) {
            return alert('Erro ao excluir Dev, tente novamente.');
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
                            placeholder="Usuário do Github"
                        />
                        <input
                            value={techs}
                            onChange={e => setTechs(e.target.value)} 
                            placeholder="Tecnologias"/>
                        <button type="submit">CADASTRAR</button>
                    </FormDev>
                        
                    <ListDevs>
                        <h1>Desenvolvedores</h1>
                        {devs.map(dev => (
                            <li key={dev._id}>
                                <button onClick={() => handleDeleteDev(dev._id)}><FaTrash size={16} color="#ED464B"/></button>
                                <img src={dev.avatar_url} alt={dev.name}/>
                                <DivInfo>
                                    <h3>{dev.name === null ? dev.name = dev.github_username : dev.name}</h3>
                                    <p>{dev.bio}</p>
                                    <p>Tecnologias: <br /><Techs>{dev.techs.join(', ')}</Techs></p>
                                    <DivGroupInfo>
                                        <p>Github: <a href={`https://www.github.com/${dev.github_username}`}>{dev.github_username}</a></p>
                                        <Link to={`/repos/${dev.github_username}`}>REPOSITÓRIOS <FaChevronRight size={16} color="#ED464B"/></Link>
                                    </DivGroupInfo> 
                                </DivInfo>
                            </li>
                        ))}

                    </ListDevs>
                </Section>
            <Footer>
                <h1>CREATED BY: <span>RicardoWorf</span></h1>
            </Footer>
        </DivContainer>
    );
}