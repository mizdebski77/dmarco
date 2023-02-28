import { Container, Image, Information, Linky, List, Logo, SecondContainer, Socials, Wrapper } from "./styledFooter";
import logo from "../images/dmarco.png"
import { Link } from "react-scroll";
import instagram from '../images/instagram.png'
import youtube from '../images/youtube.png'
import tiktok from '../images/tiktok.png'
import soundcloud from '../images/soundcloud.png'

export const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <Logo src={logo} />
                <List>
                <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={1000}
                    >
                        <List>home</List>
                    </Link>
                    <Link
                        to="music"
                        spy={true}
                        smooth={true}
                        duration={1000}>
                        <List>music</List>
                    </Link>
                    <Link
                        to="videos"
                        spy={true}
                        smooth={true}
                        duration={1000}>
                        <List>videos</List>
                    </Link>
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={1000}>
                        <List>contact</List>
                    </Link>
                </List>
            </Container>
            <SecondContainer>
                <Socials>
                    <Linky target={"_blank"} href="https://www.instagram.com/d_m_a_r_c_o_/"> <Image height={36} src={instagram}></Image></Linky>
                    <Linky target={"_blank"} href="https://www.youtube.com/channel/UC78hT9T-yLu6cvvFyp1DoiQ"> <Image height={30} src={youtube}></Image></Linky>
                    <Linky target={"_blank"} href="https://www.tiktok.com/@dmarcomusic"> <Image height={30} src={tiktok}></Image></Linky>
                    <Linky target={"_blank"} href="https://soundcloud.com/user-439172586"> <Image height={30} src={soundcloud}></Image></Linky>

                </Socials>
                <Information>
                    Copyright © 2023 D'MARCO MUSIC
                </Information>

            </SecondContainer>
        </Wrapper>
    );
};