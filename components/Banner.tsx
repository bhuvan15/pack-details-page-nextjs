import styled from '@emotion/styled'
import Image from 'next/image'
import BannerImg from '../public/Orange-design.png'

interface Props {
  
}


export const Banner: React.FC<Props> = (props) => {
    return(
        <Container>
            <Image src={BannerImg}/>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-top: 0;
`