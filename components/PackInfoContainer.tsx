import styled from '@emotion/styled'
import {jsx, css} from '@emotion/react'
import Image from 'next/image';
import PatternImg from '../public/Pattern.png'
import {RangeSlider} from './RangeSlider';
import {PackImageDetails} from './PackImageDetails'

interface Props {
  
}

export const PackInfoContainer: React.FC<Props> = (props) => { 
    return (
        <Container>
            {/* Background Pattern */}
            <Image src={PatternImg}  layout='fill' objectFit='cover'/>

            {/* Content */}
            <MiniContainer>
                {/* Range Slider */}
                <RangeSlider max={5000} val={1000}/>

                {/* Pack Image Details */}
                <PackImageDetails />

            </MiniContainer>
        </Container>
    )
}


// Styled Components
const Container = styled.div`
    height: 87vh;
    width: 100vw;
    background: linear-gradient(180deg, #000341 0%, #003380 100%), linear-gradient(180deg, #00011B 0%, #0C1B31 100%);
    position: relative;
`

const MiniContainer = styled.div`
    height: 100%;
    width: 80%;
    position: relative;
    z-index: 5;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
