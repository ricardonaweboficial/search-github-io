import React, { useEffect, useState, Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';

import { FaStar, FaCircle, FaFileAlt, FaChevronLeft } from 'react-icons/fa';

import LanguageColor from '../../utils/LanguageColor';

import api from '../../services/api';

import {
    DivContainer,
    Header,
    ButtonBack,
    Section,
    ListRepos,
    ItemRepo,
    DivGroupInfo,
    Footer
} from './styles';

export default function Repos() {   
    const { github_username } = useParams();

    const [ repos, setRepos ] = useState([]);


    useEffect(() => {
        async function loadRepos() {
            try {
                const response = await api.post(`users/${github_username}`); 

                setRepos(response.data);
                console.log(response.data);
            } catch (err) {
                return alert('Erro ao buscar repositorio, tente novamente');
            }

            
        }

        loadRepos();
    }, [github_username]);

    return (
        <DivContainer>
            <Header>
                <Link to="/"><ButtonBack><FaChevronLeft size={16} color="#2f2f2f"/>  Back</ButtonBack></Link>
                <h1>Repositório do <span>{github_username}</span></h1>
            </Header>
            <Section>
                <ListRepos>
                    {repos.map(repo => (
                        <ItemRepo key={repo.id}>
                            <h1><FaFileAlt size={16} color="#6f6f6f"/><a href={`https://www.github.com/${github_username}/${repo.name}`}>{repo.name}</a></h1>
                            <p>{repo.description === null ? repo.description = 'Sem descrição' : repo.description}</p>
                            <DivGroupInfo>
                                {repo.language &&
                                    <Fragment>
                                        <h4><FaCircle color={LanguageColor(repo.language)} size={16}/>{repo.language === null ? repo.language = 'Sem Linguagem' : repo.language}</h4>
                                        <h4><FaStar size={16} color="#ED464B"/> {repo.stargazers_count}</h4>   
                                    </Fragment>
                                }
                                
                            </DivGroupInfo>
                        </ItemRepo>                  

                    ))}
                </ListRepos>
            </Section>
            <Footer>
                <h1>CREATED BY: <span>RicardoWorf</span></h1>
            </Footer>
        </DivContainer>
    );
}