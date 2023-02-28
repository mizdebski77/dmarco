import styled from "styled-components";

export const Wrapper = styled.section`
    min-height: 100vh;
    background-image: 
    linear-gradient(${({ theme }) => theme.color.cornflowerblue},
     ${({ theme }) => theme.color.downriver});
`;


export const Header = styled.h1`
    padding-bottom: 80px;
    padding-top: 120px;
    font-size: 50px;
    text-align: center;
    margin: 0 auto;
    color: ${({ theme }) => theme.color.white};
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-weight: normal;
`;



export const Form = styled.form`
    display: grid;
    grid-gap: 20px;
    width: 50%;
    margin: 0 auto;
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    width: 80%;
}
`;



export const PersonalData = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px; 
    @media (max-width: ${({ theme }) => theme.breakPoint.menufooter}px){
    grid-template-columns: 1fr;
}
`;
export const Input = styled.input`
    font-family: 'Montserrat', sans-serif;
    ::placeholder {
        color: ${({ theme }) => theme.color.white};
    }
    padding: 20px;
    background: transparent;
    color: white;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.white};
`;

export const TextArea = styled.textarea`
    font-family: 'Montserrat', sans-serif;
    ::placeholder {
        color: ${({ theme }) => theme.color.white};
    }
    padding: 20px;
    background: transparent;
    color: white;
    border: 1px solid white;
    min-height: 150px;
    border-radius: 5px;
    resize: none;
`;

export const Button = styled.button`
    padding: 20px;
    background: transparent;
    border: 1px solid white;
    color: white;
    width: 200px;
    border-radius: 5px;
    transition: 0.5s;

    &:hover {
    cursor:pointer;
    transform: scale(1.05);
    background-color: #0b2849;
    }
`;