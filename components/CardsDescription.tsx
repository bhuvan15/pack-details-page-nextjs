import styled from '@emotion/styled'
import Image from 'next/image'
import CardBunch from '../public/Card-bunch.png'
import GoldCard from '../public/Gold-card.png'

interface Props {

}

export const CardsDescription: React.FC<Props> = (props) => { 
    return(
        <Container>
            <ImgContainer>
                <Image src={CardBunch} objectFit='cover' height={650} width={850}/>
                <Para>
                    Silver Rarios are rare limited edition numbered digital collectibles 
                    (30,000 copies in each series)
                </Para>
            </ImgContainer>

            <ImgContainer>
                <Image src={GoldCard} objectFit='contain' height={400}/>
                <Para>
                    Gold Rarios are highly rare limited edition numbered digital collectibles
                    (Only 500 copies in every series)
                </Para>
            </ImgContainer>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 10px;
    min-height: 70vh;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 15px;

    @media only screen and (max-width: 1300px) {
        & {
            justify-content: center;
        }
    }

`
const Para = styled.p`
    color: #fff;
    opacity: 0.9;
    width: 75%;
    height: 10%;
    text-align: center;

    @media only screen and (max-width: 768px) {
        & {
            font-size: 14px;
            width: 100%:
        }
    }

    @media only screen and (max-width: 400px) {
        & {
            font-size: 12px;
        }
    }
`

const ImgContainer = styled.div`
    height:70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 500px;
    margin-bottom: 20px;


    @media only screen and (max-width: 1300px) {
        & {
            height: 50vh;
            width: 100%:
        }
    }

    @media only screen and (max-width: 400px) {
        & {
            height: 40vh;
            width: 100%;
        }
    }
`
