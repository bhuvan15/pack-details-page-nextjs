import styled from '@emotion/styled'
import {Heading} from "./Heading"
import {Carousel} from "./Carousel"
import {Button} from "./Button"
import { MediaContainer } from './MediaContainer'

interface Props {

}

export const PackPlayers: React.FC<Props> = (props) => {
    const mainHead = "Which players will i get?";
    const subHead = "Bravo, Pollard, Simons, and more! CPL's finest are here.";
    const mediaHead = "MORE QUESTIONS? ASK THE COMMUNITY";
    const mediaSubHead = "The fun is where fans are";
    const btnText = "See Complete List of Launch Moments"
    return(
        <Container>
            <MiniContainer>
                {/* Heading */}
                <Heading mainHeading={mainHead} subHeading={subHead} />

                {/* Carousel */}
                <Carousel />

                {/* Button */}
                <Button text={btnText}/>

                {/* Media Heading */}
                <Heading mainHeading={mediaHead} subHeading={mediaSubHead}/>

                {/* Media Container */}
                <MediaContainer />
                
            </MiniContainer>
        </Container>
    )
}

// $background-color: rgb(0, 9, 40);
const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    
    background-color: rgb(0, 7, 30); 
`
const MiniContainer = styled.div`
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`