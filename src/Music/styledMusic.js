import styled from "styled-components";

export const Wrapper = styled.section`
    min-height: 100vh;
    background-image: 
    linear-gradient(${({ theme }) => theme.color.black},
     ${({ theme }) => theme.color.ebony});
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

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 20px;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        grid-template-columns: repeat(1, auto);
  };
  `;

export const Image = styled.img`
height:200px ;
width: 355.5px;
box-shadow: 0 0 10px ${({ theme }) => theme.color.grey}; 
transition: .5s;

@media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
width: 300px;
height: 180px;

};

&:hover {
    transform: scale(1.1);
}

&:active {
    box-shadow: 0 0 17px ${({ theme }) => theme.color.green}; 
}

`
