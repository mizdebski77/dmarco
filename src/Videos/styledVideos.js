import styled from "styled-components";

export const Wrapper = styled.section`
    min-height: 100vh;
    background-image: 
    linear-gradient(${({ theme }) => theme.color.ebony},
     ${({ theme }) => theme.color.cornflowerblue});

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
    grid-template-columns: 1fr 4fr 1fr;
    `;

export const Buttons = styled.button`
    background: transparent;
    border: none;
    transition: 0.5s;
    margin: 0;
    width: 50px;
    height: 60px;
    margin-top: 80%;
    margin: auto;
    

    &:hover {
        transform: scale(1.2);
        cursor: pointer;
    }

`;

export const Image = styled.img`
height: 60px;
@media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    height: 39px;
    width: 30px;
    
  };

`;

export const VideoContainer = styled.div`
    box-shadow: 0 0 5px rgb(161 153 153);
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
`;

export const StyledIFrame = styled.iframe`
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const VideoWrapper = styled.div`
    margin: 0 auto;
    width: 100%;
`;
