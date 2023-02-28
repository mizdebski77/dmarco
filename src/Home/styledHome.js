import styled from "styled-components";
import background from "../images/newBackground.png";
import phoneBackground from "../images/NewRelativebackground.png";


export const Wrapper = styled.section`
min-height: 100vh;
background-image: url("${background}");
background-position: center;
background-size: cover;

@media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    background-image: url("${phoneBackground}");
}`;
