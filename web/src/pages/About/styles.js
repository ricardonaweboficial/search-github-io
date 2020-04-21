    import styled from 'styled-components';

export const DivContainer = styled.div`
    width:100%;
    height:100%;
    margin:0 auto;
`;

export const Header = styled.header`
    width:100%;
    max-width:100%;

    text-align: center;
    font-size:20px;
    padding:10px;
    background:none;
    color:#6f6f6f;
    text-decoration:underline;
    position:relative;
`;

export const Section = styled.section`
    width:100%;
    height:100%;
    padding:30px 50px; 
    
    display:flex;
    justify-content:space-around;
    align-items:flex-start;
    position:relative;
`;

export const FormDev = styled.form`
    width:100%;
    max-width:350px;
    padding:20px;
    border:2px solid #000;
    position:sticky;
    top:20px;
    display:flex;
    flex-direction:column;

    h1 {
<<<<<<< HEAD
        text-align:center;
=======
	text-align:center;
>>>>>>> 0dc9f5ee1ea4ee2c62a2c1f57c0ef4929204adf2
        margin-bottom:20px;
    }

    input {
        width:100%;
        height:40px;
        margin-bottom:30px;
        background:none;
        border:none;
        border-bottom:2px solid #ED464B;
        padding:0 10px;
        font-size:17px;
    }

    button {
        width:100%;
        height:50px;
        border:none;
        border-radius:50px;
        background:#ED464B;
        color:#F1F1F1;
        margin:10px 0;
    }
`;

export const ListDevs = styled.ul`
    h1 {
        margin-bottom:20px;
        font-size:30px;
        text-align:center;
        color:#7f7f7f;
    }
    li {
        width:100%;
        max-width:650px;
        border:2px solid #000;
        padding:10px;
        display:flex;
        position:relative;
        margin-bottom:20px;


        img {
            width:30%;
        }
        
    }
`;

export const ButtonDelete = styled.button`
    position:absolute;
    top:10px;
    right:20px;
    background:none;
    border:0;
    transition:0.2s;

    &:hover {
        transform:scale(1.3);
    }
`;

export const DistributeP = styled.p`
    text-align: justify;
    text-justify:distribute;
`;

export const DivInfo = styled.div`
    padding:0 10px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;

    h3 {
        font-size:25px;
        color:#ED464B;
    }

    p {
        width:100%;
        font-size:16px;
        font-weight:bold;
        color:#303030;
        margin:10px 0;
    }
`;

export const Techs = styled.span`
    font-size:20px;
    color:#ED464B;
`;

export const DivGroupInfo = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;

    span {
        color:#2C7AD2;
    } 

    a {
        font-size:16px;
        color:#3F6DBF;
        cursor:pointer;
        font-weight:bold;
        text-decoration:none;
        transition:margin-left 0.5s;

        &:hover {
            margin-left:5px;
        }
    }

    button {
        position:absolute;
        bottom:20px;
        right:20px;
        color:#ED464B;
        display:flex;
        justify-content:center;
        align-items:center;
        font-weight: bold;
        border:0;
        background:none;
        transition:transform 0.5s;

        &:hover {
            transform:translateX(5%);
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
    position:relative;

    span {
        color:#f1f1f1;
    }
`;
