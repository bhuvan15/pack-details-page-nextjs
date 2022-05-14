import styled from '@emotion/styled'
import Image from 'next/image'
import FooterLogoImg from '../public/Footer-Logo.png'

interface Props {

}

export const RightFooter: React.FC<Props> = (props) => {
    let footerLogoHeight = 75;
    let footerLogoWidth = 75;
    return(
        <Container>
            <LinksContainer>
                <a href="https://medium.com/rario" target="_blank">Blogs</a>
                <a href="https://rario.com/terms-of-use" target="_blank">Terms</a>
                <a href="https://rario.com/privacy-policy" target="_blank">Privacy</a>
                <a href="https://rario.freshdesk.com/support/home" target="_blank">Help</a>
                <a href="https://rario.com/custom/press/p2KygpsMUAvoXLBqnsoxX" target="_blank">Press</a>
                <a href="/">Newsletters</a>
                <a href="https://twitter.com/rariohq" target="_blank">Twitter</a>
                <a href="https://www.instagram.com/rariohq/" target="_blank">Instagram</a>
                <a href="https://www.youtube.com/channel/UCqo65RCtVWBvICDMF6COhLA/featured" target="_blank">Youtube</a>
                <a href="https://www.facebook.com/rarioglobal" target="_blank">Facebook</a>
                <a href="https://www.twitch.tv/rariocomms" target="_blank">Twitch</a>
            </LinksContainer>

            <FooterImg>
                <Image src={FooterLogoImg} objectFit="contain" height={footerLogoHeight} width={footerLogoWidth}/>
            </FooterImg>
        </Container>
    )
}

const Container = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media only screen and (max-width: 768px) {
        & {
            width: 100%;
        }
    }
`

const LinksContainer = styled.div`
    height: 50%;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border-right: 1px solid rgb(206, 200, 200);

    a {
        color: #000;
        text-decoration: none;
        font-size: 12px;
        margin: 10px;
        opacity: 0.5;
    }

    @media only screen and (max-width: 768px) {
        a {
            font-size: 8px;
            margin: 5px;
        }
    }


    @media only screen and (max-width: 1300px) {
        a {
            font-size: 10px;
            margin: 8px;
        }
    }

    @media only screen and (max-width: 400px) {
        & {
            width: 90%;
            margin-top: 20px;
            border: none;
            height: 30%;
        }
    }
`

const FooterImg = styled.div`
    height: 50%;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 1300px) {
        & {
            height: 50%;
            width: 30%;
        }
    }
`