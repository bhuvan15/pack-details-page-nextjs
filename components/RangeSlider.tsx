import styled from '@emotion/styled'

interface Props {
  max : number,
  val : number,
}

export const RangeSlider: React.FC<Props> = ({max, val}) => { 
    return (
        <Container >
            <Input
            type='range'
            max={max}
            value={val}
            className='slider'
            />

            <FloatingBox>
                <H1>
                    {val} Sold / {max} Packs
                </H1>
            </FloatingBox>
            
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding: 5px 15px;
    position: relative;

`
const H1 = styled.h1`
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;

    @media only screen and (max-width: 768px) {
        & {
            font-size: 10px;
            font-weight: 800;
            text-transform: uppercase;
        }
    }
`

const Input = styled.input`

`

const FloatingBox = styled.div`
    position: absolute;
    color: #000;
    background-color: rgb(230, 230, 230);
    left: 50%;
    padding: 0px 5px;
    transform: translateX(-50%);
    top: 25px;
    border-radius: 2px;


    @media only screen and (max-width: 768px) {
        & {
            padding: 0 2px;
        }
    }

`