import { Buttons, Container, Header, Image, StyledIFrame, VideoContainer, VideoWrapper, Wrapper } from "./styledVideos"
import prevButton from "../images/prev.png"
import nextButton from "../images/next.png"
import { useState } from "react";



export const Videos = () => {

    const videoID = ['https://www.youtube.com/embed/pjxa_BEZOHU', 'https://www.youtube.com/embed/CrSDC650I-E', 'https://www.youtube.com/embed/0bmE9XY3sOc',];

    const [currentVideo, setCurrentVideo] = useState(0);
    const nextButtonHandle = () => {
        setCurrentVideo(currentVideo - 1);
    };

    const prevButtonHandle = () => {
        setCurrentVideo(currentVideo + 1);
    };

    console.log(currentVideo);
    return (
        <Wrapper id="videos">
            <Header>
                Music Videos
            </Header>
            <Container>
                <Buttons onClick={nextButtonHandle} disabled={currentVideo === 0}>
                    <Image src={prevButton}>
                    </Image>
                </Buttons>
                <VideoWrapper>
                    <VideoContainer>
                        <StyledIFrame
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen src={videoID[currentVideo]}
                        ></StyledIFrame>
                    </VideoContainer>
                </VideoWrapper>

                <Buttons onClick={prevButtonHandle} disabled={currentVideo === videoID.length - 1}>
                    <Image src={nextButton}></Image>
                </Buttons>
            </Container>

        </Wrapper >
    )
}