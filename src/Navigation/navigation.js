import { Items, Links, List, Logo, Socials, Wrapper, SocialLink, PhoneNavbar, PhoneLi, PhoneSocialsContainer, PhoneSocialLink, LinkStyle, PhoneContainer } from "./styledNavigation";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import instagram from '../images/instagram.png'
import youtube from '../images/youtube.png'
import tiktok from '../images/tiktok.png'
import soundcloud from '../images/soundcloud.png'
import { useState } from "react";


export const Navigation = () => {

    const [navbarColor, setNavbarColor] = useState(false);
    const [phoneNav, setPhoneNav] = useState(false);

    const openMenu = () => {
        setPhoneNav(!phoneNav)
    }

    const changeColor = () => {
        if (window.scrollY >= 100) {
            setNavbarColor(true);
        } else {
            setNavbarColor(false);
        };
    };

    window.addEventListener("scroll", changeColor);


    return (
        <>

            <Wrapper scrolled={navbarColor}  >
                <Items>
                    <Logo />

                    <Links >
                        <LinkStyle
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={1000}
                        >
                            home
                        </LinkStyle>

                        <LinkStyle
                            to="music"
                            spy={true}
                            smooth={true}
                            duration={1000}>
                            music
                        </LinkStyle>
                        <LinkStyle
                            to="videos"
                            spy={true}
                            smooth={true}
                            duration={1000}>
                            videos
                        </LinkStyle>
                        <LinkStyle
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={1000}>
                            contact
                        </LinkStyle>

                    </Links>
                    <Socials>
                        <SocialLink target="_blank" href="https://www.instagram.com/d_m_a_r_c_o_/">
                            <img alt="instagram" height={36} src={instagram}></img>
                        </SocialLink>
                        <SocialLink target="_blank" href="https://www.youtube.com/channel/UC78hT9T-yLu6cvvFyp1DoiQ">
                            <img alt="youtube" height={30} src={youtube}></img>
                        </SocialLink>
                        <SocialLink target="_blank" href="https://www.tiktok.com/@dmarcomusic">
                            <img alt="tiktok" height={30} src={tiktok}></img>
                        </SocialLink>
                        <SocialLink target="_blank" href="https://soundcloud.com/user-439172586">
                            <img alt="soundcloud" height={30} src={soundcloud}></img>
                        </SocialLink>
                    </Socials>
                    <PhoneNavbar onClick={openMenu}>
                        {phoneNav ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
                    </PhoneNavbar>




                </Items>


            </Wrapper>

            {phoneNav ? <PhoneContainer>



                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={1000}
                    >
                        <PhoneLi>home</PhoneLi>
                    </Link>
                    <Link
                        to="music"
                        spy={true}
                        smooth={true}
                        duration={1000}>
                        <PhoneLi>music</PhoneLi>
                    </Link>
                    <Link
                        to="videos"
                        spy={true}
                        smooth={true}
                        duration={1000}>
                        <PhoneLi>videos</PhoneLi>
                    </Link>
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={1000}>
                        <PhoneLi>contact</PhoneLi>
                    </Link>

                    <PhoneSocialsContainer>
                        <PhoneSocialLink target="_blank" href="https://www.instagram.com/d_m_a_r_c_o_/">
                            <img alt="instagram" height={36} src={instagram}></img></PhoneSocialLink>

                        <PhoneSocialLink target="_blank" href="https://www.youtube.com/channel/UC78hT9T-yLu6cvvFyp1DoiQ">
                            <img alt="youtube" height={30} src={youtube}></img>
                        </PhoneSocialLink>
                        <PhoneSocialLink target="_blank" href="https://www.tiktok.com/@dmarcomusic">
                            <img alt="tiktok" height={30} src={tiktok}></img>
                        </PhoneSocialLink>
                        <PhoneSocialLink target="_blank" href="https://soundcloud.com/user-439172586">
                            <img alt="soundcloud" height={30} src={soundcloud}></img>
                        </PhoneSocialLink>
                    </PhoneSocialsContainer>


            </PhoneContainer> : ""}
        </>
    );
};