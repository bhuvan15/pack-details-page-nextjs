import styled from '@emotion/styled';
import Image from 'next/image'
import Graphics from '../public/Footer-Graphics.png'
import {LeftFooter} from "./LeftFooter";
import {RightFooter} from './RightFooter';
import {MobileFooter} from "./MobileFooter"

interface Props {
  
}


export const Footer: React.FC<Props> = (props) => {
    return(
        <Container>
            <MiniContainer>
                {/* Left Footer */}
                    <LeftFooter/>
                
                {/* Mobile Footer */}
                    <MobileFooter/>

                {/* Right Footer */}
                    <RightFooter/>

            </MiniContainer>
            {/* Footer Graphics */}
            <FooterGraphics>
                    <Image src={Graphics} objectFit="cover" />               
            </FooterGraphics>

        </Container>
    ) 
}

const Container = styled.div`
    width: 100%;
    height: 18vh;
    background-color: #fff;
    position: relative;

    @media only screen and (max-width: 1300px) {
        & {
            height: 15vh;
        }
    }


    @media only screen and (max-width: 400px) {
        & {
            height: 30vh;
        }
    }
`

const MiniContainer = styled.div`
    height: 100%;
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    @media only screen and (max-width: 768px)  {
        width: 90%;
    }

    @media only screen and (max-width: 400px) {
        & {
            width: 100%;
        }
    }
`

const FooterGraphics = styled.div`
    position: absolute;
    right: 0;
    top: -10.5vh;
    height: 28vh;
    margin-bottom: 0;

    @media only screen and (max-width: 1250px) {
        & {
            display: none;
        }
    }

`

