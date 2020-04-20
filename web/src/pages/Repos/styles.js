import styled from 'styled-components';



export const DivContainer = styled.div`
    width:100%;
    height:100%;
    margin:0 auto;
`;

export const Header = styled.header`
    width:100%;
    max-width:100%;
    
    background:#;
    color:#6f6f6f;
    padding:10px;

    h1 {
        text-align:center;

        span  {
            color:#ED464B;
        }
    }

`;

export const ButtonBack = styled.button`
    width:150px;
    height:40px;
    background:#ED464B;
    border-radius:4px;
    font-weight:bold;
    border:none;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    top:0;
    left:40px;
    margin:10px;
    color:#2f2f2f;

    &:hover {
        background:#D13E42;
    }  
`;

export const Section = styled.section`
    width:100%;
    padding:30px 50px; 
    
    display:flex;
    justify-content:space-around;
    align-items:center;
`;

export const ListRepos = styled.ul`
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    gap:10px;
    align-items:center;
`;

export const ItemRepo = styled.li`
    list-style-type:none;
    border:2px solid #3d3d3d;
    border-radius:4px;
    padding:5px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    
    h1 {
        margin-bottom:10px;

        a {
            margin-left:5px;
            text-decoration:none;
            color:#ED464B;    

            &:hover {
                color:#C2464B;
            }
        }
    }

    p {
        color:#656565;
        font-weight:bold;
        font-size:15px;
        margin-bottom:10px;
    }
`;


export const DivGroupInfo = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;

    h4 {
        margin-right:20px;
        color: #656565;
        
        display:flex;
        align-items:center;

        svg {
            margin-right:5px;
        }
    }

`;



export const Footer = styled.footer`
    width:100%;
    padding:15px;
    text-align: center;
    font-size:8px;
    background:#ED464B;
    color:#303030;

    span {
        color:#f1f1f1;
    }
`;