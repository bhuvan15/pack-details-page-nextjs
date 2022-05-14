import styled from '@emotion/styled'
import {Heading} from './Heading'
import {CardsDescription} from './CardsDescription'
import {Banner} from './Banner'
import {Button} from './Button'

interface Props {
  
}


export const PackContent: React.FC<Props> = (props) => {
    const mainHead = "What's in the pack?";
    const subHead = "Get 4 Assured Silver Memories card and a chance to win 1 Gold Memory Card";
    const buttonText = "Learn How Rario Works";
    return(
        <Container>
            <MiniContainer>
                {/* Heading */}
                <Heading mainHeading={mainHead} subHeading={subHead}/>

                 {/* Cards Description */}
                 <CardsDescription />

                {/* Banner */}
                <Banner />

                 {/* Button */}
                <Button text={buttonText} />
            </MiniContainer>
        </Container>
    )
}

// background-color: rgb(0, 9, 40);
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

    @media only screen and (max-width: 1300px) {
        &{ 
            align-items: center;
        }
    }
`