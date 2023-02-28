import styled from "styled-components";

export const Wrapper = styled.footer`
    height: 200px;
    background-image: linear-gradient(#060d22, #000000);
    display: grid;
    font-family: 'Montserrat', sans-serif;

    
    @media (max-width: ${({ theme }) => theme.breakPoint.menufooter}px){
        height: 400px;
        display: grid;
};
`;

export const Container = styled.div`
    margin: 0 100px;
    padding: 20px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    border-bottom: 1px solid white;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.menufooter}px){
    margin: 0 auto;
    padding: 20px;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
};
`;

export const Logo = styled.img`
    display: flex;
    align-items: center;
    width: 200px;
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    color: white;
    text-transform:  uppercase;

    &:hover {
        cursor: pointer;
    }

    
    @media (max-width: ${({ theme }) => theme.breakPoint.menufooter}px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    align-items: center;
    margin: 10px;
};
    
`;

export const ListLink = styled.a`
    text-decoration: none;
    color: white;

`;

export const ListItem = styled.li`
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    transition: 0.5s;
    color: white;

    &:hover {
    transform: translateY(-10px);
    cursor: pointer;
    text-decoration: underline;
    color: rgb(170, 165, 165);
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.menufooter}px){
    padding: 10px;
    }
`;

export const SecondContainer = styled.div`
    margin: 0 100px;
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakPoint.menufooter}px){
        margin: 0 auto;
        padding: 20px;
        display: flex;
        flex-direction: column;
};
`;

export const Information = styled.text`
    color: white;
    display: flex;
    justify-content: flex-start;
`;

export const Socials = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    grid-gap: 50px;
    padding-right: 20px;
    transition: 1s;
    color: white;

    @media (max-width: ${({ theme }) => theme.breakPoint.menufooter}px){
        grid-gap: 30px;
        padding-right: 0;

};
`;

export const Image = styled.img`
`

export const Linky = styled.a`
transition: .7s;


&:hover {
    transform: scale(1.25);
    cursor: pointer;
}
`;
