import { Container, Header, Image, Wrapper } from "./styledMusic";
import fallen from '../musicImages/fallen.jpg'
import hold from '../musicImages/Holdt.jpg'
import love from '../musicImages/Love.png'
import never from '../musicImages/Never.jpg'
import numb from '../musicImages/numb.jpg'
import time from '../musicImages/time.jpg'



export const Music = () => {

    return (
        <Wrapper id="music">
            <Header>
                music
            </Header>
            <Container>
                <a rel="noreferrer" target="_blank" href="https://www.youtube.com/watch?v=iJw8UgZeDio">
                    <Image src={fallen}></Image>
                </a>
                <a rel="noreferrer" target="_blank" href="https://www.youtube.com/watch?v=iZLnJIngJig">
                    <Image src={hold} ></Image>
                </a>
                <a rel="noreferrer" target="_blank" href="https://www.youtube.com/watch?v=eY7e0oFYrvg">
                    <Image src={love}></Image>
                </a>
                <a rel="noreferrer" target="_blank" href="https://www.youtube.com/watch?v=biF0LOn1cQA">
                    <Image src={never}></Image>
                </a>
                <a rel="noreferrer" target="_blank" href="https://www.youtube.com/watch?v=oe5XB3RpNFc">
                    <Image src={numb}></Image>
                </a>
                <a rel="noreferrer" target="_blank" href="https://www.youtube.com/watch?v=u9xMwbg1O28">
                    <Image src={time}></Image>
                </a>



            </Container>

        </Wrapper>
    );
};