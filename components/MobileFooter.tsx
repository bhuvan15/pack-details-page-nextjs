import styled from '@emotion/styled'

interface Props {

}

export const MobileFooter: React.FC<Props> = (props) => {
    return(
        <Container>
            ©️ Digital Collectibles Pte Ltd.
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    font-size: 10px;
    opacity: 0.4;
    top: 0;
    left: 0;
    padding: 10px;
    display: none;

    @media only screen and (max-width: 768px)  {
        & {
            display: block;
        }
    }

    @media only screen and (max-width: 400px) {
        & {
            font-size: 8px;
        }
    }
`