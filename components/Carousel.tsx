import styled from '@emotion/styled'
import Image from 'next/image'
import CarouselImg from '../public/Carousel.png'

interface Props {

}

export const Carousel: React.FC<Props> = (props) => {
    return(
        <Container>
            <Image src={CarouselImg} objectFit="cover"/>
        </Container>
    )
}

const Container = styled.div`
    width: 100%:
    position: relative;
    z-index: 100;

    &:hover {
        cursor: pointer;
    }
`