import { Link } from "react-scroll";
import styled, { css } from "styled-components";
import background from "../images/dmarco.png";


export const Wrapper = styled.div`
    position: fixed;
    right: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    z-index: 980;
    font-family: 'Montserrat', sans-serif;
    color: white;

    ${({ scrolled }) => scrolled && css`
    background: rgb(4, 2, 14);
    border-bottom: 1px solid white;
    `};
`;

export const Items = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: auto;
`;

export const Logo = styled.div`
    width: 216px;
    height: 45px;
    background-image: url("${background}");
    background-position: center;
    background-size:90%;
    background-repeat: no-repeat;
`;

export const Links = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @media (max-width: ${({ theme }) => theme.breakPoint.navi}px){
    display: none;
  }
`;

const activeClassName = "active";

export const LinkStyle = styled(Link)`
    padding: 0;
    margin: 0 auto;
    font-family: 'Montserrat', sans-serif;
    grid-template-columns: repeat(4, 1fr);
    font-size: 20px;
    list-style: none;
    text-transform: uppercase;
    padding: 20px;
    padding-bottom: 10px;
    color: white;
    transition: .5s;
    cursor: pointer;

    &:hover {
    transform: translateY(-7px);
    color: rgb(170, 165, 165);  
    }

    &.${activeClassName} {
    font-weight: bold;
    border-bottom: 1px solid white;
}
`;

export const Socials = styled.div`
display: grid;
grid-gap: 20px;
grid-template-columns: repeat(4, 1fr);
align-items: center;
@media (max-width: ${({ theme }) => theme.breakPoint.navi}px){
    display: none;
}`;


export const SocialLink = styled.a`
transition: .7s;
display: flex;
justify-content: center;
&:hover {
    transform: scale(1.25);
}
`;


export const PhoneContainer = styled.div`
background: #161616;
position: fixed;
margin-top: 66px;
padding: 20px;
width: 100%;
display: grid;
z-index: 980;
transition: 5s ease;


`;
export const PhoneSocialLink = styled.a`
transition: .7s;
display: flex;
padding-right: 20px;
padding-top: 20px;
justify-content: center;
align-items: center;

&:hover {
    transform: scale(1.25);
}`;




export const PhoneNavbar = styled.div`
cursor: pointer;
@media (min-width: ${({ theme }) => theme.breakPoint.navi}px){
display: none;
}





@media (min-width: ${({ theme }) => theme.breakPoint.navi}px){
display: none;
}`;

export const PhoneLi = styled.li`
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    list-style: none;
    text-transform: uppercase;
    padding: 20px;
    width: 150px;
    color: white;
    transition: .5s;
    cursor: pointer;
    border-bottom: 1px solid rgb(88, 88, 88);

   
    &:hover {
    color: rgb(170, 165, 165);  
    transition: .3s ease-in-out;
-moz-transition: all 1s ease-in-out;

    }`;

export const PhoneSocialsContainer = styled.div`
        display: flex;
    `;


