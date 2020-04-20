import React from 'react';

import { Link } from 'react-router-dom';

import { FaStar, FaCircle, FaFileAlt, FaChevronLeft } from 'react-icons/fa'

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
    return (
        <DivContainer>
            <Header>
                <Link to="/"><ButtonBack><FaChevronLeft size={16} color="#2f2f2f"/>  Back</ButtonBack></Link>
                <h1>Repositório do <span>Ricardo Santos</span></h1>
            </Header>
            <Section>
                <ListRepos>
                    <ItemRepo>
                        <h1><FaFileAlt size={16} color="#6f6f6f"/> Dashboard</h1>
                        <p>Dashboard with Login and Tasks, using ReactJS, NodeJS, SQLite -> Query Builder</p>
                        <DivGroupInfo>
                            <h4><FaCircle color="yellow" size={16}/>Javascript</h4>
                            <h4><FaStar size={16} color="#ED464B"/> 2</h4>
                        </DivGroupInfo>
                    </ItemRepo>

                    <ItemRepo>
                        <h1><FaFileAlt size={16} color="#6f6f6f"/> Dashboard</h1>
                        <p>Dashboard with Login and Tasks, using ReactJS, NodeJS, SQLite -> Query Builder</p>
                        <DivGroupInfo>
                            <h4><FaCircle color="yellow" size={16}/>Javascript</h4>
                            <h4><FaStar size={16} color="#ED464B"/> 2</h4>
                        </DivGroupInfo>
                    </ItemRepo>

                    <ItemRepo>
                        <h1><FaFileAlt size={16} color="#6f6f6f"/> Dashboard</h1>
                        <p>Dashboard with Login and Tasks, using ReactJS, NodeJS, SQLite -> Query Builder</p>
                        <DivGroupInfo>
                            <h4><FaCircle color="yellow" size={16}/>Javascript</h4>
                            <h4><FaStar size={16} color="#ED464B"/> 2</h4>
                        </DivGroupInfo>
                    </ItemRepo>                    
                </ListRepos>
            </Section>
            <Footer>
                <h1>CREATED BY: <span>RicardoWorf</span></h1>
            </Footer>
        </DivContainer>
    );
}